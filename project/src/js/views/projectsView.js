import { ColorLog } from "../utils";
import * as MARKUP from "./viewMarkUp";

export const buildProjectView = function (projectPage, mainMenu, data) {
  if (projectPage.built) return;

  const homeDom = projectPage.element;
  ColorLog("Building Project View", "7393B3");

  homeDom.insertAdjacentHTML(
    "beforeend",
    `<div class = "container font_text p-5"></div>`
  );
  const projectsSection = homeDom.lastChild;

  data.forEach((entry) => {
    const [projectName, projectData] = entry; // hot

    if (projectName === "Skills") {
      projectsSection.insertAdjacentHTML(
        "afterbegin",
        MARKUP.container(0, 0, "")
      );
      const skillsCard = projectsSection.firstChild;

      skillsCard.insertAdjacentHTML(
        "beforeend",
        MARKUP.h4("Games & Programs", 0, 0, "", "color_text")
      );

      skillsCard.insertAdjacentHTML("beforeend", MARKUP.container(2, 0, ""));
      const skillsCardContainer = skillsCard.lastChild;

      skillsCardContainer.insertAdjacentHTML(
        "beforeend",
        MARKUP.h6(`${projectData.list}, ${projectData.tools}`)
      );
      return;
    }

    MARKUP.card(projectsSection, projectName, projectData);
  });

  projectPage.built = true;
};
