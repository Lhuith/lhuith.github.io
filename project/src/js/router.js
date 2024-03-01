import { ColorLog as cLog } from "./utils";
import * as CONTROLLER from "./controller";

let savedHashLocation = window.location.hash;
let pages = new Map();

export const init = function () {};

export const SetPages = function (p) {
  cLog("Page's setup", "00ff00");
  pages = p;

  console.log("Router Init");
  route(window.location.hash);
};

const showOrHideContent = function (exclude) {
  pages.forEach((page, name) => {
    if (name === "#" || name === "t" || name === "welcome") return; // home clause

    if (name === exclude) {
      page.element?.classList.remove("hide");
      page.menu?.classList.remove("hide");
      return;
    }
    page.element?.classList.add("hide");
    page.menu?.classList.add("hide");
  });
};
// route view manager
const route = function (url) {
  pages.get("t").viewBuilder();

  let index = url.replace("#", "");
  if (pages.has(index)) {
    pages.get(index).viewBuilder?.();
  } else {
    pages.get("welcome").viewBuilder();
  }
  showOrHideContent(index);
};

(function () {
  window.addEventListener("popstate", function (e) {
    if (savedHashLocation === window.location.hash) {
      window.location.hash = "";
      return;
    }
    route(window.location.hash);
    savedHashLocation = window.location.hash;
  });
})();
