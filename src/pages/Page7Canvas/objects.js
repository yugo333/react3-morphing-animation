import * as THREE from "three";
import fragShader from "./shaders/fragShader.frag";
import vertShader from "./shaders/vertShader.vert";

export const objects = (threeObj) => {
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

  shader(threeObj);
};

function loadFile(url) {
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  // リクエストが完了したとき
  if (request.readyState === 4) {
    // Http status 200 (成功)
    if (request.status === 200) {
      return request.responseText;
    } else {
      // 失敗
      // console.log("error");
      return null;
    }
  }
}

const shader = (threeObj) => {
  threeObj.clock = new THREE.Clock();

  threeObj.uniforms = {
    uTime: { value: 1.0 },
  };

  const v = loadFile(vertShader);
  const f = loadFile(fragShader);

  // ボックス
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.ShaderMaterial({
    uniforms: threeObj.uniforms,
    vertexShader: v,
    fragmentShader: f,
  });
  threeObj.cube = new THREE.Mesh(geometry, material);
  threeObj.scene.add(threeObj.cube);
};
