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

const mouseMoved = (x, y, threeObj) => {
  // 左上原点から左下原点に変換
  threeObj.mouse.x = x / threeObj.width;
  threeObj.mouse.y = 1.0 - y / threeObj.height;
};

const shader = (threeObj) => {
  const v = loadFile(vertShader);
  const f = loadFile(fragShader);

  threeObj.clock = new THREE.Clock();

  // マウス座標
  threeObj.mouse = new THREE.Vector2(0.5, 0.5);

  // uniform変数を定義
  threeObj.uniforms = {
    uAspect: {
      value: threeObj.width / threeObj.height,
    },
    uTime: {
      value: 0.0,
    },
    uMouse: {
      value: threeObj.mouse,
    },
  };

  // 平面をつくる（幅, 高さ, 横分割数, 縦分割数）
  const geo = new THREE.PlaneBufferGeometry(2, 2, 2);
  // シェーダーソースを渡してマテリアルを作成
  const mat = new THREE.ShaderMaterial({
    uniforms: threeObj.uniforms,
    vertexShader: v,
    fragmentShader: f,
  });

  threeObj.cube = new THREE.Mesh(geo, mat);
  // メッシュをシーンに追加
  threeObj.scene.add(threeObj.cube);

  window.addEventListener("mousemove", (e) => {
    mouseMoved(e.clientX, e.clientY, threeObj);
  });
};
