import { menuItem } from "./viewMarkUp";

let showingMenu = false;
const hideMenuItem = function (menu) {
  if (!showingMenu) return;
  menu.querySelectorAll("._menu_item").forEach((mi) => {
    mi.classList.add("scale-out");
    mi.classList.add("pointer_no");
  });
  showingMenu = false;
};

const showMenuItem = function (menu) {
  if (showingMenu) return;
  menu.querySelectorAll("._menu_item").forEach((mi) => {
    mi.classList.remove("scale-out");
    mi.classList.add("pointer_auto");
  });
  showingMenu = true;
};

let menuBuilt = false;
export const buildMenu = function (menus) {
  // don't build again
  if (menuBuilt) return;
  // var totalIcons = 1;
  for (const menu of menus) {
    // auto add flex instead of redoing it in html
    menu.classList.add("flex");

    menu.insertAdjacentHTML(
      "beforeend",
      `<div id="_menu_open" class="icon ${menu.dataset.icon} color_icon"></div>`
    );
    const menuOpener = menu.lastChild;

    // no icons provided for menu
    if (menu.dataset.icons === undefined || menu.dataset.icons == "") {
      console.warn("menu item has no menu items in");
      break;
    }

    // which way the menu is pointing
    const dir = menu.dataset.dir == "right";
    menu.dataset.icons.split(" ").forEach((m) => {
      menu.insertAdjacentHTML(
        dir ? "afterbegin" : "beforeend",
        menuItem(m, dir ? "mr-0" : "ml-0")
      );
    });

    menu.addEventListener("mouseover", function (e) {
      if (
        e.target === menuOpener ||
        e.target === menu ||
        e.target.classList.contains("_menu_item")
      ) {
        showMenuItem(menu);
      } else {
        hideMenuItem(menu);
      }
    });
    menu.addEventListener("mouseout", function (e) {
      hideMenuItem(menu);
    });
  }

  menuBuilt = true;
};

(function () {})();
