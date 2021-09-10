import * as THREE from "three";
import { shader } from "./shader/shader";

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
  const lights = [];
  lights[0] = new THREE.PointLight(0xffffff, 1, 0);
  lights[1] = new THREE.PointLight(0xffffff, 1, 0);
  lights[2] = new THREE.PointLight(0xffffff, 1, 0);

  lights[0].position.set(0, 200, 0);
  lights[1].position.set(100, 200, 100);
  lights[2].position.set(-100, -200, -100);

  threeObj.scene.add(lights[0]);
  threeObj.scene.add(lights[1]);
  threeObj.scene.add(lights[2]);

  shader.create(threeObj, new THREE.Color(0xeeeeee));
};
