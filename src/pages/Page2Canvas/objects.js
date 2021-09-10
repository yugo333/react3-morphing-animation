import * as THREE from "three";
import { PointShader } from "./shaders/PointShader";

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

  // シェーダモデル
  primitiveElement(threeObj);
};

const primitiveElement = (threeObj) => {
  threeObj.mesh = new THREE.Object3D();
  threeObj.mat = new THREE.ShaderMaterial({
    wireframe: false,
    // fog: true,
    uniforms: {
      time: {
        type: "f",
        value: 0.0,
      },
      pointscale: {
        type: "f",
        value: 0.0,
      },
      decay: {
        type: "f",
        value: 0.0,
      },
      complex: {
        type: "f",
        value: 0.0,
      },
      waves: {
        type: "f",
        value: 0.0,
      },
      eqcolor: {
        type: "f",
        value: 0.0,
      },
      fragment: {
        type: "i",
        value: true,
      },
      redhell: {
        type: "i",
        value: true,
      },
    },
    vertexShader: new PointShader().vertexShader(),
    fragmentShader: new PointShader().fragmentShader(),
  });
  // 第2引数ふやすとはっきりしていく（密度が増える）
  const geo = new THREE.IcosahedronBufferGeometry(3, 100);
  const mesh = new THREE.Points(geo, threeObj.mat);
  threeObj.scene.add(mesh);
};
