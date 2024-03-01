import { ColorLog } from "../../utils.js";
import { viewer } from "./../modules/viewer.js";
import * as WINDOW from "./../modules/window.js";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export class level {
  backgroundColor = [];
  a_funcs = [];
  i_funcs = [];
  pass;
  scene;
  viewer;
  controller;
  useController = false;
  controllerTarget;
  constructor(THREE, ...o) {
    if (o === undefined || o === NaN) return;

    this.scene = new THREE.Scene();

    o.forEach((_o) => {
      this.scene.add(_o);
    });
  }
  initViewer(x, y, z, type = "o", zoom = 1) {
    ColorLog("new level viewer added", "ff0000");
    this.viewer = new viewer(type, WINDOW);

    this.viewer.camera.position.z = z;
    this.viewer.camera.position.y = y;
    this.viewer.camera.position.x = x;
    this.viewer.camera.zoom = zoom;
    this.viewer.camera.updateProjectionMatrix();
  }
  getViewer() {
    if (this.viewer == null) {
      initViewer(0, 0, 0, "p");
    }
    return this.viewer;
  }
  updateCameraZoom(zoom) {
    this.getViewer().camera.zoom = zoom;
    this.getViewer().camera.updateProjectionMatrix();
  }
  getController() {
    return this.controller;
  }
  setControllerTarget(t) {
    this.controller.target = t.position;
  }
  initController(domElement) {
    ColorLog("new controller added");
    this.controller = new OrbitControls(this.viewer.camera, domElement);
    this.controller.enableZoom = true;
    this.controller.enableDamping = true;

    this.controller.update();
  }
  start(f) {
    this.i_funcs.push(f);
  }
  animate(f) {
    this.a_funcs.push(f);
  }
  init(THREE, RENDERER) {
    this.i_funcs.forEach((i) => {
      i(THREE, RENDERER);
    });
  }
  overrideBackgroundColor(bg) {
    this.backgroundColor = bg;
  }
  update(t) {
    if (
      this.a_funcs === undefined ||
      this.a_funcs === NaN ||
      this.a_funcs.length == 0
    )
      return;

    this.a_funcs.forEach((f) => {
      f(t);
    });

    this.controller?.update();
  }
}
