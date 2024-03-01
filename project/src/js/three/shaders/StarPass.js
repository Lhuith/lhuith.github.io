import {
  AddEquation,
  Color,
  CustomBlending,
  DepthTexture,
  DstAlphaFactor,
  DstColorFactor,
  HalfFloatType,
  MeshNormalMaterial,
  NearestFilter,
  NoBlending,
  ShaderMaterial,
  UniformsUtils,
  DepthStencilFormat,
  UnsignedInt248Type,
  Vector2,
  WebGLRenderTarget,
  ZeroFactor,
  Matrix4,
} from "three";
import { Pass, FullScreenQuad } from "three/addons/postprocessing/Pass";
import { CopyShader } from "three/addons/shaders/CopyShader.js";

const StarryShader = {
  name: "StarryShader",
  defines: {
    PERSPECTIVE_CAMERA: 1,
    DIFFUSE_TEXTURE: 0,
  },
  uniforms: {
    tDiffuse: { value: null },
    tDepth: { value: null },
    size: { value: new Vector2(512, 512) },

    cameraNear: { value: 1 },
    cameraFar: { value: 100 },
    cameraProjectionMatrix: { value: new Matrix4() },
    cameraInverseProjectionMatrix: { value: new Matrix4() },
  },
  vertexShader: [
    "varying vec2 vUv;",
    "void main() {",
    "vUv = uv;",
    "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
    "}",
  ].join("\n"),
  fragmentShader: [
    `
    	#include <common>
      #include <packing>
    `,
    "uniform sampler2D tDepth;",

    `
    uniform float cameraNear;
		uniform float cameraFar;

    #if DIFFUSE_TEXTURE == 1
	  	uniform sampler2D tDiffuse;
		#endif
    `,
    "varying vec2 vUv;",

    `
    float readDepth( sampler2D depthSampler, vec2 coord) {
				float fragCoordZ = texture2D( depthSampler, coord ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			}

    vec4 getDefaultColor( const in vec2 screenPosition ) {
			#if DIFFUSE_TEXTURE == 1
			return texture2D( tDiffuse, vUv );
			#else
			return vec4( 1.0 );
			#endif
		}

    float getDepth( const in vec2 screenPosition ) {
			return texture2D( tDepth, screenPosition ).x;
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}
    `,

    "void main() {",
    `
    float centerDepth = getDepth( vUv );
    vec4 noise = vec4(
      vec3(max((fract(dot(sin(gl_FragCoord.xy), gl_FragCoord.xy)) - .99) * 200.0, 0.0)),  1.0);
			if( centerDepth <= ( 1.0 - EPSILON ) ) {
				// discard;
			}
     float centerViewZ = getViewZ( centerDepth );
    `,
    "vec4 color = getDefaultColor(vUv);",
    // Credit to Atrahasis, wonderful and quick, www.shadertoy.com/view/4lSSRw

    "gl_FragColor.rgb = 1.0 - vec3(centerDepth);",
    "gl_FragColor.a = centerDepth;",
    // "gl_FragColor.xyz *=  noise.r;",
    "}",
  ].join("\n"),
};

class StarryPass extends Pass {
  constructor(scene, camera, resolution = new Vector2(512, 512)) {
    super();

    this.scene = scene;
    this.camera = camera;

    this.clear = true;
    this.needsSwap = false;

    this.originalClearColor = new Color();
    this._oldClearColor = new Color();
    this.oldClearAlpha = 1;

    this.params = {
      output: 0,
    };

    this.resolution = new Vector2(resolution.x, resolution.y);
    this.starryRenderTarget = new WebGLRenderTarget(
      this.resolution.x,
      this.resolution.y,
      { type: HalfFloatType }
    );
    const depthTexture = new DepthTexture();
    depthTexture.format = DepthStencilFormat;
    depthTexture.type = UnsignedInt248Type;

    this.normalRenderTarget = new WebGLRenderTarget(
      this.resolution.x,
      this.resolution.y,
      {
        minFilter: NearestFilter,
        magFilter: NearestFilter,
        type: HalfFloatType,
        depthTexture: depthTexture,
      }
    );

    this.normalMaterial = new MeshNormalMaterial();
    this.normalMaterial.blending = NoBlending;

    this.starryMaterial = new ShaderMaterial({
      defines: Object.assign({}, StarryShader.defines),
      fragmentShader: StarryShader.fragmentShader,
      vertexShader: StarryShader.vertexShader,
      uniforms: UniformsUtils.clone(StarryShader.uniforms),
    });
    this.starryMaterial.extensions.derivatives = true;
    this.starryMaterial.defines["PERSPECTIVE_CAMERA"] = this.camera
      .isPerspectiveCamera
      ? 1
      : 0;
    this.starryMaterial.uniforms["tDepth"].value = depthTexture;
    this.starryMaterial.uniforms["size"].value.set(
      this.resolution.x,
      this.resolution.y
    );
    this.starryMaterial.uniforms["cameraInverseProjectionMatrix"].value.copy(
      this.camera.projectionMatrixInverse
    );
    this.starryMaterial.uniforms["cameraProjectionMatrix"].value =
      this.camera.projectionMatrix;

    this.materialCopy = new ShaderMaterial({
      uniforms: UniformsUtils.clone(CopyShader.uniforms),
      vertexShader: CopyShader.vertexShader,
      fragmentShader: CopyShader.fragmentShader,
      blending: NoBlending,
    });

    this.materialCopy.transparent = true;
    this.materialCopy.depthTest = false;
    this.materialCopy.depthWrite = false;
    this.materialCopy.blending = CustomBlending;
    this.materialCopy.blendSrc = DstColorFactor;
    this.materialCopy.blendDst = ZeroFactor;
    this.materialCopy.blendEquation = AddEquation;
    this.materialCopy.blendSrcAlpha = DstAlphaFactor;
    this.materialCopy.blendDstAlpha = ZeroFactor;
    this.materialCopy.blendEquationAlpha = AddEquation;

    this.fsQuad = new FullScreenQuad(null);
  }

  render(renderer, writeBuffer, readBuffer /*, deltaTime, maskActive*/) {
    // Rendering readBuffer first when rendering to screen
    // if (this.renderToScreen) {
    this.materialCopy.blending = NoBlending;
    this.materialCopy.uniforms["tDiffuse"].value = readBuffer.texture;
    this.materialCopy.needsUpdate = true;
    this.renderPass(renderer, this.materialCopy, null);
    // }

    renderer.getClearColor(this._oldClearColor);
    this.oldClearAlpha = renderer.getClearAlpha();
    const oldAutoClear = renderer.autoClear;
    renderer.autoClear = false;

    this.starryMaterial.uniforms["cameraNear"].value = this.camera.near;
    this.starryMaterial.uniforms["cameraFar"].value = this.camera.far;

    // render normal and depth
    this.renderOverride(
      renderer,
      this.normalMaterial,
      this.normalRenderTarget,
      0x7777ff,
      1.0
    );

    // Rendering SAO texture
    this.renderPass(
      renderer,
      this.starryMaterial,
      this.starryRenderTarget,
      0xffffff,
      1.0
    );

    const outputMaterial = this.materialCopy;

    // Setting up SAO rendering
    // if (this.params.output === StarryPass.OUTPUT.Normal) {
    //   this.materialCopy.uniforms["tDiffuse"].value =
    //     this.normalRenderTarget.texture;
    //   this.materialCopy.needsUpdate = true;
    // } else {
    this.materialCopy.uniforms["tDiffuse"].value =
      this.starryRenderTarget.texture;
    this.materialCopy.needsUpdate = true;
    // }

    // Blending depends on output
    if (this.params.output === StarryPass.OUTPUT.Default) {
      outputMaterial.blending = CustomBlending;
    } else {
      outputMaterial.blending = NoBlending;
    }

    // Rendering SAOPass result on top of previous pass
    this.renderPass(
      renderer,
      outputMaterial,
      this.renderToScreen ? null : readBuffer
    );

    renderer.setClearColor(this._oldClearColor, this.oldClearAlpha);
    renderer.autoClear = oldAutoClear;
  }

  renderPass(renderer, passMaterial, renderTarget, clearColor, clearAlpha) {
    // save original state
    renderer.getClearColor(this.originalClearColor);
    const originalClearAlpha = renderer.getClearAlpha();
    const originalAutoClear = renderer.autoClear;

    renderer.setRenderTarget(renderTarget);

    // setup pass state
    renderer.autoClear = false;
    if (clearColor !== undefined && clearColor !== null) {
      renderer.setClearColor(clearColor);
      renderer.setClearAlpha(clearAlpha || 0.0);
      renderer.clear();
    }

    this.fsQuad.material = passMaterial;
    this.fsQuad.render(renderer);

    // restore original state
    renderer.autoClear = originalAutoClear;
    renderer.setClearColor(this.originalClearColor);
    renderer.setClearAlpha(originalClearAlpha);
  }

  renderOverride(
    renderer,
    overrideMaterial,
    renderTarget,
    clearColor,
    clearAlpha
  ) {
    renderer.getClearColor(this.originalClearColor);
    const originalClearAlpha = renderer.getClearAlpha();
    const originalAutoClear = renderer.autoClear;

    renderer.setRenderTarget(renderTarget);
    renderer.autoClear = false;

    clearColor = overrideMaterial.clearColor || clearColor;
    clearAlpha = overrideMaterial.clearAlpha || clearAlpha;
    if (clearColor !== undefined && clearColor !== null) {
      renderer.setClearColor(clearColor);
      renderer.setClearAlpha(clearAlpha || 0.0);
      renderer.clear();
    }

    this.scene.overrideMaterial = overrideMaterial;
    renderer.render(this.scene, this.camera);
    this.scene.overrideMaterial = null;

    // restore original state
    renderer.autoClear = originalAutoClear;
    renderer.setClearColor(this.originalClearColor);
    renderer.setClearAlpha(originalClearAlpha);
  }

  setSize(width, height) {
    this.starryRenderTarget.setSize(width, height);
    this.normalRenderTarget.setSize(width, height);

    this.starryMaterial.uniforms["size"].value.set(width, height);
    this.starryMaterial.uniforms["cameraInverseProjectionMatrix"].value.copy(
      this.camera.projectionMatrixInverse
    );
    this.starryMaterial.uniforms["cameraProjectionMatrix"].value =
      this.camera.projectionMatrix;
    this.starryMaterial.needsUpdate = true;
  }
  dispose() {
    this.starryMaterial.dispose();
    this.normalRenderTarget.dispose();

    this.normalMaterial.dispose();
    this.materialCopy.dispose();
    this.fsQuad.dispose();
  }
}
StarryPass.OUTPUT = {
  Default: 0,
  SAO: 1,
  Normal: 2,
};
export { StarryPass };
