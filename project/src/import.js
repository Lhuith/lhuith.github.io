import projectData from "./resources/projects.json";
import imageData from "./resources/image.json";
import exhibitionData from "./resources/exhibitions.json";

export const ProjectData = Object.entries(projectData);

// import and reconstruct json entries for importing and building
ProjectData.forEach((entry) => {
  const [_, projectData] = entry; // hot
  //   console.log(entry);

  projectData.preview = projectData.preview.replace("src/", "");
  if (projectData.preview !== "") {
    projectData.preview = new URL(projectData.preview, import.meta.url).href;
  } else {
    projectData.preview = new URL("img/misc/noImage.jpg", import.meta.url).href;
  }
});

imageData["exhibitions"] = exhibitionData;
export const ImageData = Object.entries(imageData);

ImageData.forEach((category) => {
  const categoryImages = category[1];

  if (category[0] === "exhibitions") {
    Object.entries(categoryImages).forEach((exhibition) => {
      exhibition[1].preview = exhibition[1].preview.replace("./", "");
      exhibition[1].preview = new URL(
        exhibition[1].preview,
        import.meta.url
      ).href;
    });
  } else {
    Object.entries(categoryImages).forEach((imgEntry) => {
      const imageMeta = imgEntry[1];
      imageMeta.url = imageMeta.url.replace("./", "");
      imageMeta.url = new URL(imageMeta.url, import.meta.url).href;
    });
  }
});

export const WelcomeImage = new URL(
  "img/sprites/welcomeSprites.png",
  import.meta.url
);

export const WelcomeImageArray = [];
for (let url of [
  "img/sprites/welcomeSpritesAnimated1.png",
  "img/sprites/welcomeSpritesAnimated2.png",
  "img/sprites/welcomeSpritesAnimated3.png",
  "img/sprites/welcomeSpritesAnimated4.png",
  "img/sprites/welcomeSpritesAnimated5.png",
  "img/sprites/welcomeSpritesAnimated6.png",
  "img/sprites/welcomeSpritesAnimated7.png",
]) {
  WelcomeImageArray.push(new URL(url, import.meta.url));
}
export const MeImage = new URL("img/me/1582883494786.jpg", import.meta.url);
export const SocialImage = new URL("img/icons/social.png", import.meta.url);
