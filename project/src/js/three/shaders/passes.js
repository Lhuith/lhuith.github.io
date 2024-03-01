import { UniformsLib } from "three";
import { GetThemeColorsAsRGB } from "../../controller";
import { Dither8x8, DitherFunc } from "./shaderChunks";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";

const blackToWhiteThreshold = 0.2;
export const blackAndWhite = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0.0 },
  },
  vertexShader: [
    "varying vec2 vUv;",
    "void main() {",
    "vUv = uv;",
    "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
    "}",
  ].join("\n"),
  fragmentShader: [
    "uniform sampler2D tDiffuse;",
    "varying vec2 vUv;",

    "void main() ",
    "{",
    "vec4 color = texture2D(tDiffuse, vUv);",

    "float colLength = length(color.rgb);",

    "vec3 grayScale = vec3(0.5, 0.5, 0.5);",
    "vec4 colorGray = vec4(vec3(dot(color.rgb, grayScale.rgb)), color.a);",

    `if(colorGray.r <= ${blackToWhiteThreshold}) {
      discard;
    }`,

    `gl_FragColor = colorGray;`,
    "}",
  ].join("\n"),
};

let backgroundColorRGB = GetThemeColorsAsRGB()[0];
export const Dither = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0.0 },
    divisor: { value: 64.0 },
  },
  vertexShader: [
    "varying vec2 vUv;",
    "void main() {",
    "vUv = uv;",
    "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
    "}",
  ].join("\n"),
  fragmentShader: [
    "uniform sampler2D tDiffuse;",
    "uniform float divisor;",
    "varying vec2 vUv;",

    `${Dither8x8}`,
    `${DitherFunc}`,

    "void main() {",
    "gl_FragColor = dither(texture2D(tDiffuse, vUv), gl_FragCoord, divisor);",
    "}",
  ].join("\n"),
};
