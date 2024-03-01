import { UniformsLib } from "three/src/renderers/shaders/UniformsLib.js";
import * as THREE from "three";
import { Dither8x8, DitherFunc, GammaFunc } from "../shaders/shaderChunks";
import { GetThemeColorsAsRGB } from "../../controller";
import { isMobile } from "../../utils";

const themeColor = GetThemeColorsAsRGB()[0];
const highlightColor = GetThemeColorsAsRGB()[3];

var resolution = (isMobile() ? 1250 : 1250).toFixed(1);

export const UniverseMaterialCheap = new THREE.ShaderMaterial({
  uniforms: THREE.UniformsUtils.merge([
    UniformsLib.lights,
    {
      time: { value: 1.0 },
    },
  ]),
  side: 2,
  // wireframe: true,
  transparent: true,
  // shader-toy port done by _Chae4ek_
  // https://www.shadertoy.com/view/flcSz2
  vertexShader: [
    `
      #include <common>
      #include <packing>
      #include <lights_pars_begin>
      `,

    "varying vec2 vUv;",
    "varying vec3 vNormal;",
    "varying vec3 vViewDir;",

    "void main() {",
    `
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 clipPosition = projectionMatrix * viewPosition;
        vUv = uv;

        vNormal = normalize(normalMatrix * normal);
        vViewDir = normalize(-viewPosition.xyz);
        
        gl_Position = clipPosition;
      `,

    "}",
  ].join("\n"),
  fragmentShader: [
    `
      #include <common>
      #include <packing>
      uniform sampler2D lookup;
      uniform float time;
    `,

    "varying vec2 vUv;",
    "varying vec3 vNormal;",
    "varying vec3 vViewDir;",

    `${Dither8x8}`,
    `${DitherFunc}`,
    `${GammaFunc}`,
    `
    
    float randm(in vec2 st) {
      vec2 r = fract(sin(st) *2.7644437);
      return fract(r.y * 276.44437 + r.x);
    }

    float particles(in vec2 st) {
      float r = randm(floor(st));
      return 0.01 + smoothstep(0.995, 1.0, r) * max(0.0, sin(r * 34433.0 + time));
    }

    const vec3 HIGHLIGHT = vec3(${highlightColor[0]}, ${highlightColor[1]}, ${highlightColor[2]});

    #define p(st) particles(st)
    vec3 avg(in vec2 st, in float a) {
      vec2 A = vec2(0.0, a);
      return HIGHLIGHT * (p(st) + p(st + A) + p(st + A.yx) + p(st - A) + p(st - A.yx));
    }

    vec3 stars(in vec2 st) {
      vec3 color = vec3(0.0);
      for(float i = 2.0; i > 0.0; --i) color += mix(color, avg(st, i), .5);
      return color + p(st);
    }

    #define scale 300.0

    void main() {
      vec2 st = ((gl_FragCoord.xy - 0.5 * vec2(${resolution}, ${resolution})) / ${resolution});
      st *= scale;

      vec3 color = stars(st) * vUv.y;

      gl_FragColor = (vec4(color, color.r));
    }`,
  ].join("\n"),
});
