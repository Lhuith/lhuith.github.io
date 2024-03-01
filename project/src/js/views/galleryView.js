import { ColorLog } from "../utils";
import * as MARKUP from "./viewMarkUp";

export const buildGalleryView = function (galleryPage, pageMenu, data) {
  if (galleryPage.built) return;

  const galleryDom = galleryPage.element;

  ColorLog("Building Gallery View", "B1D8B7");

  galleryDom.insertAdjacentHTML(
    "beforeend",
    `<div class="container font_text"></div>`
  );
  const gallerycontainer = galleryDom.lastChild;

  gallerycontainer.insertAdjacentHTML(
    "beforeend",
    MARKUP.container(0, 0, "p-5")
  );
  const exhibitionList = gallerycontainer.lastChild;
  exhibitionList.insertAdjacentHTML(
    "beforeend",
    MARKUP.h4("Exhibitions & Art", 0, 0, "", "color_text")
  );

  // pageMenu.insertAdjacentHTML(
  //   "beforeend",
  //   MARKUP.container(0, 3, "icon_block_height inline_flex")
  // );
  // galleryPage.menu = pageMenu.lastChild;

  gallerycontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery_container"></div>`
  );
  const galleryGrid = gallerycontainer.lastChild;

  data.forEach((category) => {
    const categoryLabel = category[0];
    const categoryImages = category[1];

    if (categoryLabel === "exhibitions") {
      Object.entries(categoryImages).forEach((exhibition) => {
        exhibition[1].preview = exhibition[1].preview.replace("src/", "");
        exhibition[1].preview = new URL(
          exhibition[1].preview,
          import.meta.url
        ).href;
        exhibition[1].preview = MARKUP.card(
          exhibitionList,
          exhibition[0],
          exhibition[1],
          ""
        );
      });
      return;
    }

    Object.entries(categoryImages).forEach((imgEntry) => {
      const imageMeta = imgEntry[1];

      const imageTitle = imageMeta.name;

      galleryGrid.insertAdjacentHTML(
        "beforeend",
        MARKUP.image(imageMeta.url, "")
      );
      const imgMarkup = galleryGrid.lastChild;

      if (imageTitle.includes("_f")) {
        imgMarkup.classList.add("portrait");
      } else if (imageTitle.includes("_w")) {
        imgMarkup.classList.add("landscape");
      } else {
        imgMarkup.classList.add("main");
      }
    });
  });

  galleryPage.built = true;
};
