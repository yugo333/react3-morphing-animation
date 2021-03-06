import * as THREE from "three";

import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import PointShaderFrag from "./shaders/fragShader.frag";
import PointShaderVert from "./shaders/vertShader.vert";
// import ShaderConfig from "worker-loader!./shaders/ShaderConfig";

export const objects = (threeObj) => {
  const [mesh, group] = _setMesh(threeObj);
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

  return { mesh, group };
};

const _getGeometryPosition = (geometry) => {
  const numParticles = 10000;
  const material = new THREE.MeshBasicMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  const sampler = new MeshSurfaceSampler(mesh).build();
  const particlesPosition = new Float32Array(numParticles * 3);
  for (let i = 0; i < numParticles; i++) {
    const newPosition = new THREE.Vector3();
    const normal = new THREE.Vector3();
    // sampler.sample(newPosition, normal)の引数の値がfaceのランダムな位置のpositionが設定され値が再代入される
    sampler.sample(newPosition, normal);
    particlesPosition.set([newPosition.x, newPosition.y, newPosition.z], i * 3);
  }
  return particlesPosition;
};

const _setMesh = (threeObj) => {
  const geometry = new THREE.BufferGeometry();
  const firstPos = _getGeometryPosition(
    new THREE.SphereBufferGeometry(1, 32, 32).toNonIndexed()
  );
  const secPos = _getGeometryPosition(
    new THREE.TorusBufferGeometry(0.7, 0.3, 32, 32).toNonIndexed()
  );
  const thirdPos = _getGeometryPosition(
    new THREE.TorusKnotBufferGeometry(0.6, 0.25, 300, 20, 6, 10).toNonIndexed()
  );
  const forthPos = _getGeometryPosition(
    new THREE.CylinderBufferGeometry(1, 1, 1, 32, 32).toNonIndexed()
  );
  const fivePos = _getGeometryPosition(
    new THREE.IcosahedronBufferGeometry(1.1, 0)
  );

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
  // const loadFile = (url) => {
  //   const worker = new ShaderConfig();

  //   worker.addEventListener("message", (e) => {
  //     const { data } = e;
  //     return data;
  //   });
  //   // workerにてvertとfrag持ってくる
  //   worker.postMessage(url);
  // };
  const frag = loadFile(PointShaderFrag);
  const vert = loadFile(PointShaderVert);

  const material = new THREE.RawShaderMaterial({
    // js 表示
    vertexShader: vert,
    fragmentShader: frag,

    // html なんだかんだ一番描くの楽かも
    // vertexShader: document.querySelector("#js-vertex-shader").textContent,
    // fragmentShader: document.querySelector("#js-fragment-shader").textContent,
    uniforms: {
      u_sec1: { type: "f", value: 0.0 },
      u_sec2: { type: "f", value: 0.0 },
      u_sec3: { type: "f", value: 0.0 },
      u_sec4: { type: "f", value: 0.0 },
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
  });

  geometry.setAttribute("position", new THREE.BufferAttribute(firstPos, 3));
  geometry.setAttribute("secPosition", new THREE.BufferAttribute(secPos, 3));
  geometry.setAttribute(
    "thirdPosition",
    new THREE.BufferAttribute(thirdPos, 3)
  );
  geometry.setAttribute(
    "forthPosition",
    new THREE.BufferAttribute(forthPos, 3)
  );
  geometry.setAttribute("fivePosition", new THREE.BufferAttribute(fivePos, 3));

  const mesh = new THREE.Points(geometry, material);

  const group = new THREE.Group();
  group.scale.set(0.1, 0.1, 0.1);

  group.add(mesh);

  threeObj.scene.add(group);
  return [mesh, group];
};
