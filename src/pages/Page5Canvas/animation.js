// import * as THREE from "three";

import { shader } from "./shader/shader";
let clock = 0;

export const animation = (threeObj) => {
  // // ボックス
  threeObj.cube.rotation.x += 0.01;
  threeObj.cube.rotation.y += 0.01;

  clock += 0.05; // make it seconds

  shader.update(clock);

  threeObj.renderer.render(threeObj.scene, threeObj.camera);
};
