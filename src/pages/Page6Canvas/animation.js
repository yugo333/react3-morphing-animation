const rotationPower = 0.01;

export const animation = (threeObj) => {
  threeObj.cube.rotation.x += 0.01;
  threeObj.cube.rotation.y += 0.01;
  // console.log(threeObj.group);

  threeObj.renderer.render(threeObj.scene, threeObj.camera);
};
