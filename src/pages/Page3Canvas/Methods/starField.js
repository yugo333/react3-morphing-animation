import * as THREE from "three";

// /**
//  * Starfield object
//  */
export const starField = {
  group: null,
  total: 400,
  spread: 8000,
  move: { x: 0, y: 1200, z: -1000 },
  look: { x: 0, y: 0, z: 0 },

  // create
  create(threeObj) {
    this.group = new THREE.Object3D();
    this.group.position.set(this.move.x, this.move.y, this.move.z);
    this.group.rotation.set(this.look.x, this.look.y, this.look.z);

    let geometry = new THREE.BufferGeometry();
    let material = new THREE.PointsMaterial({
      size: 0.5,
      color: 0xffffff,
      opacity: 1,
      // map: LoaderHelper.get("starTexture"),
      blending: THREE.AdditiveBlending,
      vertexColors: false,
      transparent: false,
      depthTest: false,
    });
    const vertices = [];
    for (let i = 0; i < this.total; i++) {
      let angle = Math.random() * Math.PI * 2;
      let radius = THREE.Math.randInt(0, this.spread);

      vertices.push(
        Math.cos(angle) * radius,
        (Math.sin(angle) * radius) / 10,
        THREE.Math.randInt(-this.spread, 0)
      );
    }
    console.log(vertices);
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(vertices), 3)
    );
    this.group.add(new THREE.Points(geometry, material));
    threeObj.scene.add(this.group);
  },
};
