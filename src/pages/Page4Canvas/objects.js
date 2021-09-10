import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const objects = (threeObj) => {
  // title
  const geometry = new THREE.PlaneGeometry(200, 200);
  var texture = new THREE.TextureLoader().load(
    "pngfind.com-wave-png-594653.png"
  );
  const material = new THREE.MeshBasicMaterial({
    // color: 0x156289,
    // emissive: 0x072534,
    side: THREE.DoubleSide,
    map: texture,
    // flatShading: true,
  });
  threeObj.cube = new THREE.Mesh(geometry, material);
  threeObj.cube.position.set(-600, 300, -500);
  threeObj.scene.add(threeObj.cube);

  // logo
  threeObj.groupLogo = new THREE.Object3D();
  threeObj.groupLogo.position.set(-30, -30, 0);
  const gltfLoader = new GLTFLoader();
  gltfLoader.load(
    "taitleModel.glb",
    (gltf) => {
      const levelMesh = gltf.scene;
      // levelMesh.scale.set(50, 50, 50);
      // levelMesh.position.set(0, 0, -100);
      levelMesh.rotation.y = Math.PI;
      threeObj.groupLogo.add(levelMesh);
    },
    null
  );

  let pointL = new THREE.PointLight(0x009aff, 0.9, 5500);
  pointL.position.set(-80, 50, 0);
  pointL.castShadow = false;
  let pointL2 = new THREE.PointLight(0xff00ff, 0.9, 5500);
  pointL2.position.set(80, -50, 0);
  pointL2.castShadow = false;
  let pointL3 = new THREE.PointLight(0x009aff, 3, 5500);
  pointL3.position.set(150, 100, -30);
  pointL3.castShadow = false;

  // const sphereSize = 10;
  // const pointLightHelper = new THREE.PointLightHelper(pointL3, sphereSize);
  // threeObj.scene.add(pointLightHelper);

  threeObj.groupLogo.add(pointL);
  threeObj.groupLogo.add(pointL2);
  threeObj.groupLogo.add(pointL3);
  threeObj.scene.add(threeObj.groupLogo);
  // ライト
  // setup light source
  // const light = new THREE.PointLight(0x009aff, 1, 1000);
  // light.position.set(0, 200, -500);
  // light.castShadow = false;
  // // light.target = scene;
  // threeObj.scene.add(light);
};
