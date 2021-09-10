import * as THREE from "three";
import { SimplexNoise } from "simplex-noise";

export const groundPlain = {
  gr: null,
  g: null,
  material: null,
  plane: null,
  simplex: null,
  factor1: 300, // smoothness
  scale1: 30, // terrain size
  speed1: 0.015, // move speed
  cycle1: 0,
  move: { x: 0, y: -300, z: -1000 },
  look: { x: 29.8, y: 0, z: 0 },

  // create
  create(threeObj) {
    this.gr = new THREE.Object3D();
    this.gr.position.set(this.move.x, this.move.y, this.move.z);
    this.gr.rotation.set(this.look.x, this.look.y, this.look.z);

    this.g = new THREE.PlaneGeometry(4000, 2000, 128, 64);
    this.material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      opacity: 1,
      blending: THREE.NoBlending,
      side: THREE.FrontSide,
      transparent: false,
      depthTest: false,
      wireframe: true,
    });

    this.plane = new THREE.Mesh(this.g, this.material);
    this.plane.position.set(0, 0, 0);

    this.simplex = new SimplexNoise();
    this.moveNoise();

    this.gr.add(this.plane);
    threeObj.scene.add(this.gr);
  },

  // change noise values over time
  moveNoise() {
    for (let v = 0; v < this.g.attributes.position.array.length; v += 3) {
      const vertex = this.g.attributes.position.array;
      let xoff = vertex[v] / this.factor1;
      let yoff = vertex[v + 1] / this.factor1 + this.cycle1;
      let rand = this.simplex.noise2D(xoff, yoff) * this.scale1;
      vertex[v + 2] = rand;
    }
    this.g.attributes.position.needsUpdate = true;
    this.cycle1 += this.speed1;
  },

  // update
  update() {
    this.moveNoise();
    // this.move.y = -150;
  },
};
