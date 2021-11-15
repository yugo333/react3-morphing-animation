export const animation = (threeObj) => {
  const delta = threeObj.clock.getDelta();
  threeObj.uniforms["uTime"].value += delta * 0.7;

  threeObj.renderer.render(threeObj.scene, threeObj.camera);
};
