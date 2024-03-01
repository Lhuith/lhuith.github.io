import { blackAndWhite } from "../shaders/passes";
import { level } from "./levelModel";

export const buildTestLevel = function (THREE) {
  const steps = 8;
  const rad = 5;
  const increment = 1;
  let spheres = [];

  for (let i = 0; i < steps; i++) {
    spheres.push(
      new THREE.Mesh(
        new THREE.SphereGeometry(
          i * rad,
          i == 0 ? 2 : i * increment,
          i == 0 ? 2 : i * increment
        ),
        new THREE.MeshNormalMaterial({
          wireframe: i != 1 ? true : false,
          color: new THREE.COLOR(1, 0, 0),
        })
      )
    );
  }
  const test = new level(THREE, ...spheres);
  test.pass = blackAndWhite;

  const x = 2000;
  const y = 1000;
  test.update = function (t) {
    for (let i = 0; i < steps; i++) {
      spheres[i].rotation.x = t / x / (i == 0 ? 1 : i);
      spheres[i].rotation.y = t / y / (i == 0 ? 1 : i);
    }
  };
  return test;
};
