import { SocialImage } from "../import";
import { GetThemeData } from "./data";
import * as DOM from "./dom";
import { ColorLog, HexToRgb } from "./utils";

// theme
export let theme;
export let themeIndex;
export let backgroundColor;
export let foregroundColor;
export let textColor;
export let textColorAlt;

ColorLog("Building Controller", "ffff32");

// themes
export const SetSiteTheme = function (theme) {
  SetTheme(theme);

  setBackgroundColor(theme.colors[0]);
  setForegroundColor(theme.colors[1]);
  setMainTextColor(theme.colors[2]);
  setAltTextColor(theme.colors[3]);
};

export const getBackgroundColor = function () {
  return document.documentElement.style.getPropertyValue("--color_background");
};
export const SetTheme = function (t) {
  theme = t;
  WEBGL_THEME();
};

export const GetTheme = function () {
  return theme;
};

export const GetThemeColors = function () {
  return theme.colors;
};

export const GetThemeColorsAsRGB = function () {
  return theme.colors.map((c) => {
    return HexToRgb(c);
  });
};

export const setBackgroundColor = function (hex) {
  document.documentElement.style.setProperty("--color_background", hex);
  document.documentElement.style.setProperty("--background-color", hex);
  document.documentElement.style.setProperty("--tooltip-background-color", hex);
};
export const setForegroundColor = function (hex) {
  document.documentElement.style.setProperty("--color_foreground", hex);
  document.documentElement.style.setProperty("--primary-color", hex);
};
export const setMainTextColor = function (hex) {
  document.documentElement.style.setProperty("--color_text", hex);
  document.documentElement.style.setProperty("--tooltip-font-color", hex);
};
export const setAltTextColor = function (hex) {
  document.documentElement.style.setProperty("--color_text_alt", hex);
  document.documentElement.style.setProperty(
    "--font-on-primary-color-main",
    hex
  );
};

// grid
export const setGridRepeat = function (n) {
  document.documentElement.style.setProperty("--grid_repeat", n);
};
export const getGridRepeat = function (n) {
  return +document.documentElement.style
    .getPropertyValue("--grid_repeat")
    .replace("px", "");
};
export const setFeatureColSpan = function (n) {
  document.documentElement.style.setProperty("--grid_feature_col", n);
};
export const setFeatureRowSpan = function (n) {
  document.documentElement.style.setProperty("--grid_feature_row", n);
};
export const setPageColSpan = function (n) {
  document.documentElement.style.setProperty("--grid_project_col", n);
};
export const setPageRowSpan = function (n) {
  document.documentElement.style.setProperty("--grid_project_row", n);
};
export const setGridAutoRowSize = function (n) {
  document.documentElement.style.setProperty("--grid_auto_row_size", `${n}px`);
};
export const setLandscapeColSpan = function (n) {
  document.documentElement.style.setProperty("--grid_landscape_col", n);
};
export const setLandscapeRowSpan = function (n) {
  document.documentElement.style.setProperty("--grid_landscape_row", n);
};
export const setPortraitColSpan = function (n) {
  document.documentElement.style.setProperty("--grid_portrait_col", n);
};
export const setPortraitRowSpan = function (n) {
  document.documentElement.style.setProperty("--grid_portrait_row", n);
};

// image
export const setImagePreviewSize = function (s) {
  document.documentElement.style.setProperty("--img_preview_size", `${s}px`);
};

// effects
export const setBackdropBlur = function (b) {
  document.documentElement.style.setProperty("--blur-threshold", `${b}px`);
};

// sprites/icon
export const spritePixelSize = function (size) {
  document.documentElement.style.setProperty(
    "--sprite_pixel_size",
    `${size}px`
  );
};
export const setIconSize = function (size) {
  document.documentElement.style.setProperty("--icon_size", `${size}px`);
};
export const getIconSize = function () {
  return +document.documentElement.style
    .getPropertyValue("--icon_size")
    .replace("px", ""); // remove css px prefix
};
export const iconBackgroundSize = function (sizeX, sizeY) {
  document.documentElement.style.setProperty(
    "--icon_background_size",
    `${sizeX * 100}% ${sizeY * 100}%`
  );
};

// Thanks : Tim Down
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// Thanks https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data#filling_a_blank_imagedata_object
const buildThemeColorIcon = function (colors, name = "theme") {
  const IData = new ImageData(8, 8);

  // Fill the array with RGBA values
  for (let i = 0; i < IData.data.length; i += 4) {
    // Modify pixel data
    const index = i / 4;
    const colorIndex = Math.floor(index / 16);
    const colorAtIndex = hexToRgb(colors[colorIndex]);
    IData.data[i + 0] = colorAtIndex.r; // R value
    IData.data[i + 1] = colorAtIndex.g; // G value
    IData.data[i + 2] = colorAtIndex.b; // B value
    IData.data[i + 3] = 255; // A value
  }

  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = IData.width;
  canvas.height = IData.height;
  ctx.putImageData(IData, 0, 0);

  return `.${name}{background: url(${canvas.toDataURL(
    "image/png"
  )}) 0; background-size: 32px}`;
};

export const iconCSSInit = function (DOM, iconData) {
  let styleEl = document.createElement("style");
  let styleSheet;
  // Append style element to head
  document.head.appendChild(styleEl);
  // Grab style sheet
  styleSheet = styleEl.sheet;

  const cSSIconTemplate = function (name, size) {
    if (name === "theme") {
      return buildThemeColorIcon(GetTheme().colors.reverse());
    }
    return `.${name}{background: url(${SocialImage}) ${size}px 0px; background-size: var(--icon_background_size);}`;
  };
  // setup CSS for icon atlas
  styleSheet.insertRule(cSSIconTemplate(iconData.icons[0].name, 0));
  for (let i = iconData.icons.length - 1; i > 0; i--) {
    styleSheet.insertRule(
      cSSIconTemplate(
        iconData.icons[Math.abs(i - iconData.icons.length)].name,
        iconData.iconSize * i
      )
    );
  }
};

export const event_WebGlPause = new Event("webgl_pause");
export const event_WebGlSceneChange = new Event("webgl_scene_change");
export const event_WebGlTheme = new Event("webgl_theme");

export const WEBGL_PAUSE = function () {
  DOM.three.dispatchEvent(event_WebGlPause);
};

export const WEBGL_THEME = function () {
  DOM.three.dispatchEvent(event_WebGlTheme);
};

export const WEBGL_SCENE_CHANGE = function (l) {
  event_WebGlSceneChange.levelName = l;
  DOM.three.dispatchEvent(event_WebGlSceneChange);
};

(function () {
  //
  // setting theme
  let themeIndex = 20;
  SetSiteTheme(GetThemeData().themes[themeIndex]);

  // events manager
  window.addEventListener("change", function (e) {
    // console.log("global listener on: ", e.target);
  });
})();
