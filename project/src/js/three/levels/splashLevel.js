export const buildSplashLevel = function (THREE) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(20, 20, 20),
    new THREE.MeshNormalMaterial({ wireframe: true })
  );

  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000, 200, 200),
    new THREE.MeshBasicMaterial({
      color: 0x89cff0,
      side: THREE.DoubleSide,
      wireframe: false,
    })
  );
  water.rotation.x = Math.PI / 2;

  const splash = new Level(mesh, water);
  splash.setBackgroundColor(0xff0000);

  splash.update = function (t) {};
  return splash;
};
