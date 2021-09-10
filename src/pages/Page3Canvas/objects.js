import * as THREE from "three";

let commonHue = 0.038; // initial color
let commonColor = new THREE.Color();
commonColor.setHSL(commonHue, 0.8, 0.5);

export const objects = (threeObj) => {
  // ボックス
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshPhongMaterial({
    color: 0x156289,
    emissive: 0x072534,
    side: THREE.DoubleSide,
    flatShading: true,
  });
  threeObj.cube = new THREE.Mesh(geometry, material);
  threeObj.scene.add(threeObj.cube);

  // ライト
  // setup light source
  const light = new THREE.PointLight(0xffffff, 4, 1000);
  light.position.set(0, 200, -500);
  light.castShadow = false;
  // light.target = scene;
  light.color = commonColor;
  threeObj.scene.add(light);
};
