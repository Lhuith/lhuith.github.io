// 8x8 version of https://www.shadertoy.com/view/WstXR8
// 8x8 taken from this wonderful article on dithering http://alex-charlton.com/posts/Dithering_on_the_GPU/
export const Dither8x8 = `const float indexMatrix8x8[64] = float[](
        0.0, 32.0, 8.0, 40.0, 2.0, 34.0, 10.0, 42.0,
        48.0, 16.0, 56.0, 24.0, 50.0, 18.0, 58.0, 26.0,
        12.0, 44.0, 4.0,  36.0, 14.0, 46.0, 6.0,  38.0,
        60.0, 28.0, 52.0, 20.0, 62.0, 30.0, 54.0, 22.0,
        3.0,  35.0, 11.0, 43.0, 1.0,  33.0, 9.0,  41.0,
        51.0, 19.0, 59.0, 27.0, 49.0, 17.0, 57.0, 25.0,
        15.0, 47.0, 7.0,  39.0, 13.0, 45.0, 5.0,  37.0,
        63.0, 31.0, 55.0, 23.0, 61.0, 29.0, 53.0, 21.0);`;

export const DitherFunc = `
vec4 dither(vec4 c, in vec4 coord, float divisor) {
      int x = (int(coord.x) % 8);
      int y = (int(coord.y) % 8);
      float b = (indexMatrix8x8[(x + y * 8)] / divisor);
    
      return vec4(step(b, c.r), step(b, c.g), step(b, c.b), c.a);
    }
`;

// many thanks from of https://www.shadertoy.com/view/WstXR8
export const GammaFunc = `
vec4 gamma(vec4 c) {
        return vec4(pow(c.rgb, vec3(2.2)) - 0.004, c.a);
}`;

export const LightStructDefine = `
        #if NUM_DIR_LIGHTS > 0
        struct DirectionalLight 
        {
          vec3 direction;
          vec3 color;
        };
        #endif

        uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
        //uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];
        //varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];
`;

const ndotl = ` dot(vNormal, normalize(directionalLights[0].direction))`;
export const nDotL = `float nDotL = ${ndotl};`;
export const nDotLClamped = `float nDotL = clamp(${ndotl}, 0.0, 1.0);`;
