import { isMobile } from "../utils";

const cssParams = { p: 0, m: 0, o: "", c: "color_text" };
export const container = function (p = 1, m = 0, o = "") {
  return `<div class="p-${p} m-${m} ${o}"></div>`;
};

export const checkboxP = function (id, text, p = 0) {
  return `
            <label> \
              <input id = ${id} type="checkbox" class="filled-in" checked="checked" /> \
              <span class="color_text_alt">${text}</span> \
            </label> \ `;
};
export const buttonP = function (id, text) {
  return `<a id="${id}" class="btn filled">${text}</a>`;
};

const label = function (tag, text, p = 0, m = 0, o = "", c = "color_text_alt") {
  return `<${tag} class="p-${p} m-${m} ${c} ${o}">${text}</${tag}>`;
};
export const h1 = function (text, p, m, o, c) {
  return label("h1", text, p, m, o, c);
};
export const h2 = function (text, p, m, o, c) {
  return label("h2", text, p, m, o, c);
};
export const h3 = function (text, p, m, o, c) {
  return label("h3", text, p, m, o, c);
};
export const h4 = function (text, p, m, o, c) {
  return label("h4", text, p, m, o, c);
};
export const h5 = function (text, p, m, o, c) {
  return label("h5", text, p, m, o, c);
};
export const h6 = function (text, p, m, o, c) {
  return label("h6", text, p, m, o, c);
};
export const p = function (text, p, m, o, c) {
  return label("p", text, p, m, o, c);
};
export const span = function (text, p, m, o, c) {
  return label("span", text, p, m, o, c);
};

export const pHeader = function (text) {
  return `<p class="color_text p-0 m-0">${text}</p>`;
};

// hold onto the size of icons (in px, 32 each) including menu open
export const menuItem = function (icon, marginDir) {
  return `<a href="#${icon}" class=${marginDir}>
        <div class="_menu_item color_icon scale-transition scale-out icon ${icon}"></div>
    </a>`;
};

export const link = function (ref, link, o = "", dir = "bottom") {
  return `<a href="${ref}" class="width_min">
    <div class="tooltipped icon ${link} ${o}" data-position=${dir} data-tooltip="${link}"></div>
  </a>`;
};

export const Labellink = function (text, p, m, o, c, ref, tag) {
  return label(
    tag,
    `<a target="_blank" href="${ref}">${text}</a><span></span>`,
    p,
    m,
    o,
    c
  );
};

export const project = function (name) {
  return (
    `<div class="p-0 m-0 font_text color_text_alt center-align">` +
    p(name, 0, 0, "") +
    `</div>`
  );
};

export const image = function (src, o = "") {
  return `<img src="${src}" loading="lazy" class="${o}">`;
};

export const footerSpace = function () {
  return `<div class="p-5 m-1">
  <div class="icon_block_height "></div>
  </div>`;
};

export const pSpace = function (p) {
  return `<div class="p-${p}">
  <div class=""></div>
  </div>`;
};

export const card = function (dom, name, data, o = "") {
  dom.insertAdjacentHTML(
    "beforeend",
    `<div class="${
      isMobile() ? "" : "row"
    } py-1 font_text game_widget_page ${o}"></div>`
  );
  const projectRow = dom.lastChild;

  projectRow.insertAdjacentHTML(
    "beforeend",
    `<div class="col s2 thumb_wrapper"></div>`
  );
  const projectCardLeft = projectRow.lastChild;

  projectRow.insertAdjacentHTML(
    "beforeend",
    `<div class="col s10 solid_b"></div>`
  );
  const projectCardRight = projectRow.lastChild;

  let linkMarkUp = h5(name + "", 0, 2, "", "color_text");
  if (data.link != "") {
    linkMarkUp = Labellink(name, 0, 2, "link", "color_text", data.link, "h5");
  }
  projectCardRight.insertAdjacentHTML("beforeend", linkMarkUp);

  if (data.description != "") {
    projectCardRight.insertAdjacentHTML(
      "beforeend",
      p(data.description, 1, 1, "", "color_text_alt")
    );
  }

  if (data.stack != undefined && data.stack != "") {
    projectCardRight.insertAdjacentHTML(
      "beforeend",
      p(data.stack, 1, 1, "", "color_text ")
    );
  }

  projectCardLeft.insertAdjacentHTML("beforeend", image(data.preview, ""));
};
