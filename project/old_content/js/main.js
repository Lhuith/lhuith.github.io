var container, stats;
var camera, MainScene, BackgroundScene, renderer, clock, composer;
var angle;

// Custom global variables
var mouse = { x: 0, y: 0 };
var resolution = 3;

var timer = 0;
var timeLimit = 0.25;
var startTime = Date.now();
var ForeGroundStarsPass;

init();
animate();

function Shader(vertex, fragment) {
  this.vertex = vertex;
  this.fragment = fragment;
}

//Yummy Yum Yum
function textParse(glsl, shadow_text, dither_text) {
  var text = glsl.replace("AddShadow", shadow_text);
  text = text.replace("AddDither", dither_text);

  return text;
}

function init() {
  resolution = window.devicePixelRatio == 1 ? 3 : 4;

  MainScene = new THREE.Scene();
  BackgroundScene = new THREE.Scene();

  camera = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    -500,
    4000
  );

  container = document.getElementById("webGL-container");

  renderer = new THREE.WebGLRenderer({ antialias: false });

  renderer.setSize(1024, 1024);

  renderer.setClearColor(0x000000, 1);
  container.appendChild(renderer.domElement);
  renderer.autoClear = false;
  renderer.setPixelRatio(window.devicePixelRatio);

  container.append(renderer);

  clock = new THREE.Clock();

  //Composer
  composer = new THREE.EffectComposer(renderer);
  //Passes
  ForeGroundStarsPass = new THREE.ShaderPass(ForeGroundStars);
  ForeGroundStarsPass.uniforms.resolution.value = new THREE.Vector2(
    $(container).width(),
    $(container).height()
  );

  composer.addPass(ForeGroundStarsPass);

  var effectCopy = new THREE.ShaderPass(THREE.CopyShader);
  composer.addPass(effectCopy);
  effectCopy.renderToScreen = true;

  var MainRenderPass = new THREE.RenderPass(MainScene, camera);
  MainRenderPass.clear = false;
  MainRenderPass.clearDepth = true;
  composer.addPass(MainRenderPass);

  MainRenderPass.renderToScreen = true;

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  // notify the renderer of the size change
  // update the camera
  resolution = window.devicePixelRatio == 1 ? 3 : 4;
  var onMobile = false;

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    onMobile = true;
  } else {
    onMobile = false;
  }

  if (onMobile) {
    console.log("OnMobile");
    renderer.setSize($(container).width(), $(container).height());
    composer.setSize($(container).width(), $(container).height());
  } else {
    console.log("OnPc");
    renderer.setSize($(container).width(), $(container).height());
    composer.setSize($(container).width(), $(container).height());
  }

  camera.left = window.innerWidth / -2;
  camera.right = window.innerWidth / 2;
  camera.top = window.innerHeight / 2;
  camera.bottom = window.innerHeight / -2;
  camera.updateProjectionMatrix();
}

function animate() {
  var delta = clock.getDelta();
  timer = timer + delta;
  angle += 0.1;
  ForeGroundStarsPass.uniforms._Time.value = timer;

  requestAnimationFrame(animate);
  HandleCursor();
  input();
  render();
}

function HandleCursor() {}

function ShowHideInfo() {}

function toggleOrbts() {}

function input() {}

function render() {
  composer.render();
}

function toScreenPosition(obj, camera) {
  var vector = new THREE.Vector3();

  var widthHalf = window.innerWidth / 2;
  var heightHalf = window.innerHeight / 2;

  obj.updateMatrixWorld();
  vector.setFromMatrixPosition(obj.matrixWorld);
  vector.project(camera);

  vector.x = vector.x * widthHalf + widthHalf;
  vector.y = -(vector.y * heightHalf) + heightHalf;
  vector.z = obj.position.z;
  return {
    x: vector.x,
    y: vector.y,
    z: vector.z,
  };
}

// Follows the mouse event
function onMouseMove(event) {
  // Update the mouse variable
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  mouse.x = ((mouse.x + 1) * window.innerWidth) / 2;
  mouse.y = ((-mouse.y + 1) * window.innerHeight) / 2;
}

function onMouseUp(evt) {
  evt.preventDefault();
  mouseDown = false;
}

function MouseDown(event) {
  event.preventDefault();
  switch (event.button) {
    case 0: // left
      mouseDown = true;
      break;
    case 1: // middle
      break;
    case 2: // right
      break;
  }
}

function RemoveOldShizz() {}

function doDispose(obj) {
  if (obj !== null) {
    for (var i = 0; i < obj.children.length; i++) {
      doDispose(obj.children[i]);
    }
    if (obj.geometry) {
      obj.geometry.dispose();
      obj.geometry = undefined;
    }
    if (obj.material) {
      if (obj.material.map) {
        obj.material.map.dispose();
        obj.material.map = undefined;
      }
      obj.material.dispose();
      obj.material = undefined;
    }
  }
  obj = undefined;
}

// Credit to THeK3nger - https://gist.github.com/THeK3nger/300b6a62b923c913223fbd29c8b5ac73
//Sorry to any soul that bare's witness to this Abomination....May the gods have mercy on me
function ShaderLoader(
  vertex_url,
  fragment_url,
  onLoad,
  Custom,
  onProgress,
  onError
) {
  var vertex_loader = new THREE.FileLoader(THREE.DefaultLoadingManager);
  vertex_loader.setResponseType("text");
  vertex_loader.load(
    vertex_url,
    function (vertex_text) {
      var fragment_loader = new THREE.FileLoader(THREE.DefaultLoadingManager);
      fragment_loader.setResponseType("text");
      fragment_loader.load(fragment_url, function (fragment_text) {
        var shadow_loader = new THREE.FileLoader(THREE.DefaultLoadingManager);
        shadow_loader.setResponseType("text");
        shadow_loader.load("js/Shaders/Shadow.glsl", function (shadow_text) {
          var dither_loader = new THREE.FileLoader(THREE.DefaultLoadingManager);
          dither_loader.setResponseType("text");
          dither_loader.load("js/Shaders/Dither.glsl", function (dither_text) {
            onLoad(
              Custom,
              textParse(vertex_text, shadow_text, dither_text),
              textParse(fragment_text, shadow_text, dither_text)
            );
          });
        });
      });
    },
    onProgress,
    onError
  );
}
