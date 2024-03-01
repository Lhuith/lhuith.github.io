import * as THREE from "three";
const MODE = {
  ORTHO: "o",
  PERSP: "p",
};
export class viewer {
  camera;
  mode;
  windowHeight;
  tanFOV;
  constructor(m, w, z) {
    if (m == undefined || m == NaN) {
      this.mode = MODE.ORTHO;
    }
    switch (m) {
      case "o":
        this.mode = MODE.ORTHO;
        break;
      case "p":
        this.mode = MODE.PERSP;
        break;
    }
    switch (this.mode) {
      case MODE.ORTHO:
        this.camera = new THREE.OrthographicCamera(
          w.GetWidthRaw() / -2,
          w.GetWidthRaw() / 2,
          w.GetHeightRaw() / 2,
          w.GetHeightRaw() / -2,
          -10000,
          10000
        );
        this.camera.updateProjectionMatrix();
        break;
      case MODE.PERSP:
        this.camera = new THREE.PerspectiveCamera(
          45,
          w.GetWidth() / w.GetHeight(),
          1,
          10000
        );
        this.tanFOV = Math.tan(((Math.PI / 180) * this.camera.fov) / 2);
        this.windowHeight = w.GetHeight();
        break;
    }
  }
  init() {}
  update(t) {}
  lookAt(o) {
    if (o == undefined || o == NaN) {
      console.warn("lookAt object is nil/empty");
    }
    this.camera.lookAt(o);
  }
  resizeCamera(w) {
    switch (this.mode) {
      case MODE.ORTHO:
        // console.log("orth resize");
        this.camera.left = w.GetWidthRaw() / -2;
        this.camera.right = w.GetWidthRaw() / 2;
        this.camera.top = w.GetHeightRaw() / 2;
        this.camera.bottom = w.GetHeightRaw() / -2;
        break;
      // https://jsfiddle.net/psyrendust/8nbpehj3/
      case MODE.PERSP:
        // console.log("persp resize");
        this.camera.aspect = w.GetWidth() / w.GetHeight();
        // adjust the FOV
        this.camera.fov =
          (360 / Math.PI) *
          Math.atan(this.tanFOV * (w.GetHeight() / this.windowHeight));
        break;
    }

    this.camera.updateProjectionMatrix();
  }
}
