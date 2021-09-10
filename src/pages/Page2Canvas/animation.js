export const animation = (threeObj) => {
  // ボックス
  threeObj.cube.rotation.x += 0.01;
  threeObj.cube.rotation.y += 0.01;

  // シェーダモデル
  const performance = Date.now() * 0.003;
  threeObj.mesh.rotation.y += threeObj.options.perlin.vel;
  threeObj.mesh.rotation.x =
    (Math.sin(performance * threeObj.options.spin.sinVel) *
      threeObj.options.spin.ampVel *
      Math.PI) /
    180;
  threeObj.mat.uniforms["time"].value =
    threeObj.options.perlin.speed * (Date.now() - threeObj.start);
  threeObj.mat.uniforms["pointscale"].value = threeObj.options.perlin.perlins;
  threeObj.mat.uniforms["decay"].value = threeObj.options.perlin.decay;
  threeObj.mat.uniforms["complex"].value = threeObj.options.perlin.complex;
  threeObj.mat.uniforms["waves"].value = threeObj.options.perlin.waves;
  threeObj.mat.uniforms["eqcolor"].value = threeObj.options.perlin.eqcolor;
  threeObj.mat.uniforms["fragment"].value = threeObj.options.perlin.fragment;
  threeObj.mat.uniforms["redhell"].value = threeObj.options.perlin.redhell;
  //---

  threeObj.renderer.render(threeObj.scene, threeObj.camera);
};
