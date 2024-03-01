import { ShaderMaterial } from "three";

export const SpriteAtlasMaterial = function (properties) {
  let shader = new ShaderMaterial({
    uniforms: {
      map: { value: properties.map },
      offset: { value: properties.offset },
      size: { value: properties.size },
    },
    transparent: true,
    vertexShader: `
      uniform float rotation;
      uniform vec2 center;
      varying vec2 vUv;


      void main() {
        vUv = uv;

        vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

        vec2 scale;
        scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
        scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

        vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

        vec2 rotatedPosition;
        rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
        rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

        mvPosition.xy += rotatedPosition;

        gl_Position = projectionMatrix * mvPosition;
      }
      `,
    fragmentShader: `
      uniform sampler2D map;
      uniform vec2 offset;
      uniform vec2 size;
      varying vec2 vUv;
      void main() {
        vec4 color = texture2D(map, vec2(vUv.x * size.x + offset.x, vUv.y * size.y + offset.y));
        gl_FragColor = vec4(color);
      }
      `,
  });

  return shader;
};
