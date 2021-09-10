import * as THREE from "three";

// /**
//  * Shooting star object
//  */
export const shootingStar = {
  scene: null,
  stars: [],
  spread: 1000,

  // create
  create(threeObj) {
    this.scene = threeObj.scene;
    let geometry = new THREE.CylinderGeometry(0, 2, 120, 10);
    let material = new THREE.MeshBasicMaterial({
      color: 0xffffcc,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
      transparent: false,
      depthTest: true,
    });

    let randx = THREE.Math.randInt(-this.spread, this.spread);
    let cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.set(randx, 500, 200);
    cylinder.rotation.set(Math.PI / 2, 0, 0);
    this.stars.push(cylinder);
    this.scene.add(cylinder);
  },

  // update
  update() {
    for (let i = 0; i < this.stars.length; i++) {
      let cylinder = this.stars[i];

      if (cylinder.position.z < -3000) {
        cylinder.position.z = 0;
        cylinder.position.x = Math.ceil(Math.random() * 7000) - 4000;
        continue;
      }
      cylinder.position.z -= 20;
    }
  },
};
