export const GetResolution = function () {
  return window.devicePixelRatio == 1 ? 1 : 1;
};
export const GetWidthRaw = function () {
  return window.innerWidth;
};
export const GetHeightRaw = function () {
  return window.innerHeight;
};
export const GetWidth = function () {
  return GetWidthRaw() / 10;
};
export const GetHeight = function () {
  return GetHeightRaw() / 10;
};

export const SetComposerToWindowSpecs = function (renderer) {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(
    Math.round(GetWidthRaw() / GetResolution()),
    Math.round(GetHeightRaw() / GetResolution())
  );
};

export const SetRendererToWindowSpecs = function (renderer) {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(
    Math.round(GetWidthRaw() / GetResolution()),
    Math.round(GetHeightRaw() / GetResolution())
  );
  renderer.domElement.style.width =
    Math.round(
      (renderer.domElement.width * GetResolution()) / window.devicePixelRatio
    ) + "px";
  renderer.domElement.style.height =
    Math.round(
      (renderer.domElement.height * GetResolution()) / window.devicePixelRatio
    ) + "px";
};
