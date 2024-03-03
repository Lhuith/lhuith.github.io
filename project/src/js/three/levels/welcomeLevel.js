import { Vector2 } from "three";
import { level } from "./levelModel";
import { UniverseMaterialCheap } from "./../mats/universeMaterial";
import { SpriteAtlasMaterial } from "./../mats/SpriteAtlasMaterial";
import { isMobile } from "../../utils";
import { WelcomeImageArray } from "../../../import";

const welcomeAnimations = [];

export const buildWelcomeLevel = function (THREE) {
  const objs = [];
  let index = 0;
  const loader = new THREE.TextureLoader();
  for (let image of WelcomeImageArray) {
    let s = loader.load(image);
    s.magFilter = THREE.NearestFilter;
    s.minFilter = THREE.NearestFilter;
    welcomeAnimations.push(s);
  }
  let sprite = new THREE.Sprite(
    new SpriteAtlasMaterial({
      map: welcomeAnimations[0],
      offset: new Vector2(0, 0),
      size: new Vector2(1, 1),
    })
  );
  sprite.scale.set(2, 1, 1);

  objs.push(sprite);

  let universe = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 15),
    UniverseMaterialCheap
  );
  universe.position.set(1, 8, -10);
  objs.push(universe);

  const welcome = new level(THREE, ...objs);

  welcome.initViewer(1, 1, 0, "o");
  if (!isMobile()) {
    welcome.updateCameraZoom(300);
  } else {
    welcome.updateCameraZoom(250);
  }

  welcome.update = function (t) {
    if (Math.trunc(t / 10) % 32 == 0) {
      sprite.material.uniforms.map.value =
        welcomeAnimations[index % welcomeAnimations.length];
      index++;
    }
    universe.material.uniforms.time.value = (t / 1000) % 1000;
  };

  return welcome;
};

{
  // sprite atlas work
  // const spriteSheetWidth = 8.0;
  // const tileSize = 1.0 / spriteSheetWidth;
  // const emptySpriteMeta = function (s) {
  //   return spriteMeta("_", s, { x: 0, y: 0 });
  // };
  // const spriteMeta = function (n, s, p) {
  //   return { name: n, size: s, pos: p };
  // };
  // let centre = 0.275;
  // let i = 0;
  // let j = 0;
  // for (let s of [
  //   spriteMeta("camp_light", { x: 5, y: 1 }, { x: -1.0, y: 0, z: -2 }),
  //   spriteMeta("camp_fire", { x: 1, y: 1 }, { x: 1, y: centre }),
  //   spriteMeta("log", { x: 2, y: 1 }, { x: -1.25, y: centre }),
  //   spriteMeta("fox", { x: 1, y: 1 }, { x: -0.25, y: centre + 0.005 }),
  //   spriteMeta("lion", { x: 2, y: 1 }, { x: -0.55, y: 0.375, z: -1 }),
  //   spriteMeta("lhuith", { x: 1, y: 1 }, { x: -0.75, y: centre }),
  //   spriteMeta("axe", { x: 1, y: 1 }, { x: -1.1, y: centre - 0.01, z: 1 }),
  //   emptySpriteMeta({ x: 3, y: 1 }),
  //   spriteMeta(
  //     "dragon_tail",
  //     { x: 5, y: 1 },
  //     { x: -1.85, y: -tileSize * 3.8, z: 1 }
  //   ),
  //   emptySpriteMeta({ x: 3, y: 1 }),
  //   spriteMeta("dragon_body", { x: 6, y: 1 }, { x: -1.85, y: 0.5, z: -2 }),
  //   emptySpriteMeta({ x: 2, y: 1 }),
  //   emptySpriteMeta({ x: 8, y: 1 }),
  //   emptySpriteMeta({ x: 8, y: 1 }),
  //   emptySpriteMeta({ x: 8, y: 1 }),
  //   emptySpriteMeta({ x: 8, y: 1 }),
  // ]) {
  //   // console.log(s.name, i / spriteSheetWidth);
  //   let normalizedSizeX = tileSize * s.size.x; // bring it to 1/tileSize mapping
  //   let normalizedSizeY = tileSize * s.size.y;
  //   let sprite = new THREE.Sprite(
  //     new SpriteAtlasMaterial({
  //       map: spriteSheet,
  //       offset: new Vector2(i / spriteSheetWidth, j / spriteSheetWidth),
  //       size: new Vector2(normalizedSizeX, normalizedSizeY),
  //     })
  //   );
  //   sprite.position.set(s.pos.x, s.pos.y, s.pos?.z | 0);
  //   sprite.scale.set(
  //     normalizedSizeX * spriteSheetWidth,
  //     normalizedSizeY * spriteSheetWidth,
  //     1.0
  //   );
  //   objs.push(sprite);
  //   i = (i + normalizedSizeX * spriteSheetWidth) % spriteSheetWidth;
  //   if (i === 0) j += normalizedSizeY * spriteSheetWidth;
  // }
}
