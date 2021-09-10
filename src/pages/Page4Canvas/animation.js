let hasPointLight = false;

export const animation = (threeObj) => {
  // // ボックス
  // threeObj.cube.rotation.x += 0.01;
  threeObj.cube.rotation.y += 0.01;

  // logo light
  if (threeObj.groupLogo.children[0].position.x > 200) {
    hasPointLight = true;
  }
  if (threeObj.groupLogo.children[0].position.x < -200) {
    hasPointLight = false;
  }
  if (hasPointLight) {
    threeObj.groupLogo.children[0].position.x -= 1;
    threeObj.groupLogo.children[1].position.x += 1;
  }
  if (!hasPointLight) {
    threeObj.groupLogo.children[0].position.x += 1;
    threeObj.groupLogo.children[1].position.x -= 1;
  }
  // logo model
  if (threeObj.groupLogo.children[3]) {
    if (threeObj.groupLogo.children[3].scale.x < 50) {
      threeObj.groupLogo.children[3].scale.x += 1;
      threeObj.groupLogo.children[3].scale.y += 1;
      threeObj.groupLogo.children[3].scale.z += 1;
      threeObj.groupLogo.children[3].position.z -= 2;
    }
  }

  threeObj.renderer.render(threeObj.scene, threeObj.camera);
};
