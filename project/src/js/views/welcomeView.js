import { ColorLog } from "../utils";
import * as MARKUP from "../views/viewMarkUp";

export const buildWelcomeView = function (welcomePage, pageMenu, data) {
  if (welcomePage.built) return;

  ColorLog("Building Welcome View", "FFA500");

  const welcomeDom = welcomePage.element;

  welcomeDom.insertAdjacentHTML(
    "beforeend",
    `<div class="container left-align font_text p-5"></div>`
  );
  const welcomeContainer = welcomeDom.lastChild;
  welcomeContainer.insertAdjacentHTML(
    "beforeend",
    MARKUP.container(0, 0, "p-3")
  );
  const textContainer = welcomeContainer.lastChild;

  textContainer.insertAdjacentHTML(
    "beforeend",
    MARKUP.h5(`Warmest welcomes,`, 0, 0, "mb-3", "color_text")
  );

  textContainer.insertAdjacentHTML(
    "beforeend",
    MARKUP.h5(
      `I'm a software engineer and indie developer publishing under my studio ${MARKUP.span(
        "Yurluin",
        0,
        0,
        "",
        "color_text"
      )}. My daily drive is to create fun and interesting patterns.`,
      0,
      0,
      ""
    )
  );

  welcomePage.built = true;
};
