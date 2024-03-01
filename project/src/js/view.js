import { ColorLog as cLog, isMobile } from "./utils";

import * as DOM from "./dom";
import * as CONTROLLER from "./controller";
import * as ROUTER from "./router";
import * as MARKUP from "./views/viewMarkUp";

import { buildResumeView } from "./views/resumeView";
import { buildMenu } from "./views/menuView";
import { buildGalleryView } from "./views/galleryView";
import { buildProjectView } from "./views/projectsView";
import { buildWelcomeView } from "./views/welcomeView";
import { GetIconData, GetImageData, GetMeData, GetProjectData } from "./data";
import { ImageData, ProjectData } from "../import";

cLog("Building View", "");

const meData = GetMeData();
const iconData = GetIconData();
const projectData = GetProjectData();
const imageData = GetImageData();

// site title
DOM.title.innerHTML = `${meData.info.name} | ${meData.info.alias}`;

// rendering title('s) info
DOM.studioLabels.forEach((t) => {
  t.innerHTML += `${meData.info.title}`;
});

// // rendering name('s) info
// DOM.nameLabels.forEach((t) => {
//   t.innerHTML += `${meData.info.name}`;
// });
// DOM.aliasLabels.forEach((t) => {
//   t.innerHTML += `${meData.info.alias}`;
// });
// DOM.summary.innerHTML = `${meData.info.summary}`;
// // thanks James
// // https://stackoverflow.com/questions/1955687/best-way-for-simple-game-loop-in-javascript
// setInterval(onTimerTick, 10000);
// function onTimerTick() {
//   DOM.mainNameLabel.innerHTML =
//     Math.round(Math.random()) == 0 ? meData.info.alias : meData.info.name;
// }

// images
{
  CONTROLLER.setImagePreviewSize(125);
}

// setting grid
export const rowRepeat = isMobile() ? 2 : 10;
export const gridItemSize = 50;
export const projectSpan = 6;
export const featureSpan = Math.floor(rowRepeat / 2) - projectSpan;

export const porColSpan = 5;
export const porRowSpan = 10;

export const lanColSpan = 5;
export const lanRowSpan = 3;
{
  CONTROLLER.setGridRepeat(rowRepeat);
  CONTROLLER.setFeatureColSpan(featureSpan);
  CONTROLLER.setFeatureRowSpan(featureSpan);

  CONTROLLER.setPageColSpan(projectSpan);
  CONTROLLER.setPageRowSpan(projectSpan);

  CONTROLLER.setGridAutoRowSize(gridItemSize);

  CONTROLLER.setPortraitColSpan(porColSpan);
  CONTROLLER.setPortraitRowSpan(porRowSpan);

  CONTROLLER.setLandscapeColSpan(lanColSpan);
  CONTROLLER.setLandscapeRowSpan(lanRowSpan);
}

// setting effects
{
  CONTROLLER.setBackdropBlur(20);
}

// setting sprite/icon
{
  CONTROLLER.spritePixelSize(iconData.sizeX);
  CONTROLLER.setIconSize(iconData.iconSize);
  CONTROLLER.iconBackgroundSize(iconData.icons.length, 1);

  // css related setup
  CONTROLLER.iconCSSInit(DOM, iconData);
}

// content pages setup including routing/menu
{
  let pages = new Map();

  DOM.pages.forEach((page) => {
    const pageName = page.id.replace("_", "");
    pages.set(pageName, {
      element: page,
      built: false,
      menu: null,
      viewBuilder: null,
    });

    const mapPage = pages.get(pageName);
    mapPage.element.insertAdjacentHTML("beforeend", MARKUP.footerSpace());

    // add view builder func per specific content
    switch (pageName) {
      case "projects":
        mapPage.viewBuilder = function () {
          // CONTROLLER.TIME_UNPAUSE_WEBGL(1);

          // appending resume information
          projectData["Skills"] = meData.skills[0].areas[0];

          buildProjectView(mapPage, pages, ProjectData);
          mapPage.element.insertAdjacentHTML("beforeend", MARKUP.footerSpace());
        };
        break;
      case "resume":
        mapPage.viewBuilder = () => {
          // CONTROLLER.TIME_UNPAUSE_WEBGL(1);
          buildResumeView(mapPage, DOM.pageMenu, meData);
          mapPage.element.insertAdjacentHTML("beforeend", MARKUP.footerSpace());
        };
        break;
      case "gallery":
        mapPage.viewBuilder = function () {
          // CONTROLLER.TIME_UNPAUSE_WEBGL(1);

          buildGalleryView(mapPage, DOM.pageMenu, ImageData);
          mapPage.element.insertAdjacentHTML("beforeend", MARKUP.footerSpace());
        };
        break;
      case "welcome":
        mapPage.viewBuilder = function () {
          // DOM.three.classList.add("me_mask");
          DOM.links.classList.remove("hide");
          mapPage.element.classList.remove("hide");

          CONTROLLER.WEBGL_PAUSE();
          CONTROLLER.WEBGL_SCENE_CHANGE("welcome");

          buildWelcomeView(mapPage, DOM.pageMenu, meData);
          mapPage.element.insertAdjacentHTML("beforeend", MARKUP.footerSpace());
        };
        break;
      default:
        console.warn(pageName, "page isn't handled");
        break;
    }
  });

  pages.set("t", {
    menu: DOM.mainMenu,
    viewBuilder: function () {
      // CONTROLLER.UNPAUSE_WEBGL();
      DOM.links.classList.add("hide");
      pages.get("welcome").element.classList.add("hide");

      // DOM.three.classList.remove("me_mask");

      // CONTROLLER.WEBGL_SCENE_CHANGE("ini");
      // cLog("transition call", "EADDCA");
    },
  });

  pages.set("#", {
    menu: DOM.mainMenu,
    viewBuilder: function () {
      cLog("Home", "EADDCA");
    },
  });

  // setting main menu icon sets per page listed in html view
  // where id="_x" = [x]:'x.png' is setup and stored in a dataset
  if (DOM.mainMenu !== null) {
    [...pages.keys()].reverse().forEach((e) => {
      if (e === "#" || e === "t" || e === "welcome") return;
      DOM.mainMenu?.insertAdjacentHTML(
        "beforeend",
        MARKUP.link(`#${e}`, e, "_menu_item color_icon")
      );
    });
    DOM.mainMenu.dataset.icons = [...pages.keys()].join(" ");

    meData.links.forEach((l) => {
      DOM.mainMenu.insertAdjacentHTML(
        "beforeend",
        MARKUP.link(l.link, l.icon, "color_foreground p-0", "bottom")
      );
    });
  }
  // DOM.mainMenu?.addEventListener("click", function (e) {
  //   if (e.target.classList.contains("_menu_item")) {
  //     if (e.target.classList.contains("color_icon")) {
  //       e.target.classList.remove("color_icon");
  //       return;
  //     }

  //     DOM.mainMenu.querySelectorAll("._menu_item").forEach((m) => {
  //       m.classList.remove("color_icon");
  //     });
  //     e.target.classList.add("color_icon");
  //   }
  // });

  ROUTER.SetPages(pages);
}

// https://github.com/makenotion/notion-sdk-js
// TODO : integrate notion
{
}

// javascript one time init fire
(function () {
  // buildMenu(DOM.menus);
  // links
  {
  }
})();
