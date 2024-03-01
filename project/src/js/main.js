// import for script init's
import * as DATA from "./data.js";
import * as CONTROLLER from "./controller";
import * as THREE from "./three/three";
import * as ROUTER from "./router";
import * as VIEW from "./view";
import * as IMPORT from "./../import.js";

import { ColorLog as cLog, isMobile } from "./utils";

(function () {
  cLog("Building Site", "ff0000");
  M.AutoInit();

  if (isMobile()) {
    console.log("on mobile");
    document.querySelectorAll(".tooltipped").forEach((t) => {
      var instance = M.Tooltip.getInstance(t);
      instance.destroy();
    });
  }
})();
