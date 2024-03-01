import * as THREE from "three";
import * as WINDOW from "./modules/window.js";
import { three } from "./../dom.js";

import { ColorLog } from "../utils.js";
import { HasLevel, LoadLevel } from "./levels.js";
import { GetThemeColorsAsRGB } from "../controller.js";

let LEVEL, RENDERER;

ColorLog("Building Three", "a020f0");

LEVEL = LoadLevel("welcome");

RENDERER = new THREE.WebGLRenderer();
RENDERER.setAnimationLoop(animation);

RENDERER.outputColorSpace = THREE.LinearSRGBColorSpace;
RENDERER.setClearColor(new THREE.Color(...GetThemeColorsAsRGB()[0]), 0.0);
WINDOW.SetRendererToWindowSpecs(RENDERER);
three.appendChild(RENDERER.domElement);

LEVEL.init(THREE, RENDERER);

let pause = false;
three.addEventListener(
  "webgl_pause",
  (e) => {
    pause != pause;
  },
  false
);

three.addEventListener(
  "webgl_scene_change",
  (e) => {
    changeScene(e.levelName);
  },
  false
);

three.addEventListener(
  "webgl_theme",
  (e) => {
    console.log("setting theme colors");
  },
  false
);

let startStoreTime = 0;
let timeDifference = 0;

// animation
// 30 fps
let interval = 1 / 60;
function animation(t) {
  // if (CONTROLLER.GetWebGLState()) {
  //   if (!CONTROLLER.GetWebGLTimeStoreState()) {
  //     CONTROLLER.WEBGL_SET_TIME_STORED(true);
  //     startStoreTime = t - timeDifference;
  //     timeDifference = 0;
  //   }
  //   return;
  // }

  // if (!CONTROLLER.GetWebGLTimeStoreState()) {
  //   CONTROLLER.WEBGL_SET_TIME_STORED(true);
  //   timeDifference = t - startStoreTime;
  // }

  RENDERER.render(LEVEL.scene, LEVEL.viewer.camera);
  LEVEL.update(t - timeDifference);
}

export const changeScene = function (name) {
  if (!HasLevel(name)) {
    console.warn(`level ${name} doesn't exist`);
    return;
  }
  LEVEL = LoadLevel(name);
};

// Listeners
window.addEventListener(
  "resize",
  () => {
    // notify the renderer of the size change
    WINDOW.SetRendererToWindowSpecs(RENDERER);
    // update the viewer camera
    LEVEL.getViewer().resizeCamera(WINDOW);
  },
  false
);
