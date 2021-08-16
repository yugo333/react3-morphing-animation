export const animation = (threeObj) => {
  threeObj.cube.rotation.x += 0.01;
  threeObj.cube.rotation.y += 0.01;

  threeObj.renderer.render(threeObj.scene, threeObj.camera);
};
