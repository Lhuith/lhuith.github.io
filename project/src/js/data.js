import themeData from "../resources/themes.json";
import meData from "../resources/me.json";
import imageData from "../resources/image.json";
import exhibitionsData from "../resources/exhibitions.json";
import iconData from "../resources/icons.json";
import projectData from "../resources/projects.json";

export const GetThemeData = function () {
  return themeData;
};

export const GetMeData = function () {
  return meData;
};

export const GetImageData = function () {
  // TODO run generate function here
  return imageData;
};

export const GetExhibitionsData = function () {
  return exhibitionsData;
};

export const GetIconData = function () {
  return iconData;
};

export const GetProjectData = function () {
  return projectData;
};
