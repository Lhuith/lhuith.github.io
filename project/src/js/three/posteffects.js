import * as THREE from "three";

import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

import * as PASSES from "./shaders/passes.js";
import * as WINDOW from "./modules/window.js";
import * as CONTROLLER from "../controller.js";

import { test } from "./levels/test.js";
import { viewer } from "./modules/viewer.js";
import { pixel, three } from "../dom.js";

const VIEWER = new viewer("o", WINDOW);

VIEWER.camera.position.z = 115;
VIEWER.camera.position.y = 0;
VIEWER.lookAt(new THREE.Vector3(0, 1, 0));

const LEVEL = test;
const scene = LEVEL.scene;

const threeBackgroundColor = new THREE.Color(LEVEL.backgroundColor);
console.log(threeBackgroundColor.r);

const renderer = new THREE.WebGLRenderer({
  antialias: false,
});
{
  renderer.setAnimationLoop(animation);
  renderer.setClearColor(new THREE.Color(LEVEL.backgroundColor), 1.0);
  WINDOW.SetRendererToWindowSpecs(renderer);

  pixel.appendChild(renderer.domElement);
}

const composer = new EffectComposer(renderer);

const renderPass = new RenderPass(scene, VIEWER.camera);
composer.addPass(renderPass);

const blackAndWhitePass = new ShaderPass(PASSES.blackAndWhite);
composer.addPass(blackAndWhitePass);

const outputPass = new OutputPass();
composer.addPass(outputPass);

// animation
function animation(t) {
  LEVEL.update(t);

  blackAndWhitePass.uniforms.time.value = t / 1000;
  blackAndWhitePass.needsUpdate = true;

  composer.render();
}

function windowResize() {
  // notify the renderer of the size change
  // WINDOW.SetRendererToWindowSpecs(renderer);
  WINDOW.SetComposerToWindowSpecs(composer);
  // update the viewer camera
  VIEWER.resizeCamera(WINDOW);
}

// Listeners
window.addEventListener("resize", windowResize, false);
