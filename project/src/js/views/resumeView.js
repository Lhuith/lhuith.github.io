import { MeImage } from "../../import";
import { checkbox } from "../model";
import { calculateDuration, ColorLog, isMobile } from "../utils";
import * as Markup from "./viewMarkUp";

// import
// const beforeEnd = "beforeend";

// TODO Add pdf generator
// const headingClass = `class = "m-0"`;

export const buildResumeView = function (resumePage, pageMenu, data) {
  if (resumePage.built) return;

  ColorLog("Building Resume View", "00ff00");

  const resumeDom = resumePage.element;

  //! page menu
  const artCheckBoxObj = new checkbox("_resume_art_param", pageMenu);
  const techCheckBoxObj = new checkbox("_resume_technical_param", pageMenu);

  resumeDom.insertAdjacentHTML(
    "beforeend",
    `<div class="font_text ${isMobile() ? "" : "row"} p-1 container"></div>`
  );
  const resumeRow = resumeDom.lastChild;

  resumeRow.insertAdjacentHTML("beforeend", '<div class="cold s4 p-2"></div>');
  const infoCol = resumeRow.lastChild;

  resumeRow.insertAdjacentHTML("beforeend", '<div class="col s8 p-2"></div>');
  const detailsCol = resumeRow.lastChild;

  {
    //! basic info
    {
      infoCol.insertAdjacentHTML(
        "afterbegin",
        Markup.image(MeImage, "responsive-img center-align")
      );
      infoCol.insertAdjacentHTML(
        "beforeend",
        Markup.h4(data.info.name + " " + data.info.last, 0, 0, "", "color_text")
      );
    }

    //! education
    {
      infoCol.insertAdjacentHTML("beforeend", Markup.container(3, 0, ""));
      const educationContainer = infoCol.lastChild;
      educationContainer.insertAdjacentHTML(
        "beforeend",
        Markup.h4("Education")
      );

      data.education.forEach((l) => {
        educationContainer.insertAdjacentHTML(
          "beforeend",
          Markup.container(2, 0, "solid_l")
        );
        const educationCategoryContainer = educationContainer.lastChild;

        educationCategoryContainer.insertAdjacentHTML(
          "beforeend",
          Markup.h6(l.name)
        );

        l.certification.forEach((c) => {
          educationCategoryContainer.insertAdjacentHTML(
            "beforeend",
            Markup.p(
              `${c.name + " | " + c.date}`,
              0,
              0,
              `${c.meta}`,
              "color_text"
            ) +
              (c.sub == "" || c.sub == undefined
                ? ""
                : Markup.p(`${c.sub}`, 0, 0, `ml-2 ${c.meta}`))
          );
        });
      });
    }
  }

  // detailsCol.insertAdjacentHTML(
  //   "beforeend",
  //   Markup.p(data.info.summary, 0, 0, `pb-2`)
  // );

  //! experience
  {
    detailsCol.insertAdjacentHTML("beforeend", Markup.container(3, 0, ""));
    const experiencesContainer = detailsCol.lastChild;

    experiencesContainer.insertAdjacentHTML(
      "beforeend",
      Markup.h4("Experience")
    );

    data.experience.forEach((l) => {
      experiencesContainer.insertAdjacentHTML(
        "beforeend",
        Markup.container(2, 0, "solid_l")
      );
      const experienceContainer = experiencesContainer.lastChild;

      // add meta tags for art/technical
      if (l.meta != undefined && l.meta.length != 0) {
        for (const s of l.meta) {
          if (s != "") {
            experienceContainer.classList.add(`${s}`);
          }
        }
      }

      const text = l.description.reduce((description, d) => {
        return (description += Markup.p(`${d}`, 0, 0, "ml-2"));
      }, "");

      experienceContainer.insertAdjacentHTML(
        "beforeend",
        Markup.pHeader(l.work + ` | ` + l.name) +
          Markup.pHeader(calculateDuration(l.start_date, l.end_date)) +
          text
      );
    });
  }

  detailsCol.insertAdjacentHTML("beforeend", Markup.container(3, 0, ""));
  const skillsContainer = detailsCol.lastChild;

  skillsContainer.insertAdjacentHTML("beforeend", Markup.h4("Skills"));
  //! skills
  {
    data.skills.forEach((l) => {
      skillsContainer.insertAdjacentHTML(
        "beforeend",
        Markup.container(2, 0, "solid_l")
      );
      const skillsTopicContainer = skillsContainer.lastChild;

      if (l.meta != undefined && l.meta.length != 0) {
        for (const s of l.meta) {
          skillsTopicContainer.classList.add(`${s}`);
        }
      }

      skillsTopicContainer.insertAdjacentHTML("beforeend", Markup.h6(l.topic));
      skillsTopicContainer.insertAdjacentHTML(
        "beforeend",
        Markup.p(l.summary, 0, 0, "ml-2 py-1", "color_text")
      );

      l.areas.forEach((a) => {
        skillsTopicContainer.insertAdjacentHTML(
          "beforeend",
          `<h7>${a.name}</h7>`
        );
        skillsTopicContainer.insertAdjacentHTML(
          "beforeend",
          Markup.p(a.list, 0, 0, "ml-2") +
            Markup.p(a.programs, 0, 0, "ml-2") +
            (a.tools != "" ? Markup.p(a.tools, 0, 0, "ml-2") : "")
        );
      });
    });
  }

  //! view functionality
  artCheckBoxObj.registerOnEvent(function () {
    document
      .querySelectorAll(".art")
      .forEach((n) => n.classList.remove("hide"));
  });
  artCheckBoxObj.registerOffEvent(function () {
    document.querySelectorAll(".art").forEach((n) => n.classList.add("hide"));
  });

  techCheckBoxObj.registerOnEvent(function () {
    document
      .querySelectorAll(".technical")
      .forEach((n) => n.classList.remove("hide"));
  });
  techCheckBoxObj.registerOffEvent(function () {
    document
      .querySelectorAll(".technical")
      .forEach((n) => n.classList.add("hide"));
  });

  resumePage.built = true;
};
