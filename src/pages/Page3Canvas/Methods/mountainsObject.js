import * as THREE from "three";
import { SimplexNoise } from "simplex-noise";
/**
 * Mountains object
 */
let commonHue = 0.038; // initial color
let commonColor = new THREE.Color();
commonColor.setHSL(commonHue, 0.8, 0.5);

export const mountainsObject = {
  group: null,
  simplex: null,
  geometry: null,
  factor: 1000, // smoothness
  scale: 500, // terrain size
  speed: 0.0005, // move speed
  cycle: 0,
  move: { x: 0, y: 0, z: -3500 },
  look: { x: 0, y: 0, z: 0 },

  create(threeObj) {
    this.group = new THREE.Object3D();
    this.group.position.set(this.move.x, this.move.y, this.move.z);
    this.group.rotation.set(this.look.x, this.look.y, this.look.z);

    this.simplex = new SimplexNoise();
    this.geo = new THREE.PlaneGeometry(10000, 1000, 128, 32);

    let texture = new THREE.TextureLoader().load(
      "Mountain-PNG-Image-715x214.png"
    );
    texture.wrapT = THREE.RepeatWrapping;
    texture.wrapS = THREE.RepeatWrapping;

    let material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      opacity: 1,
      map: texture,
      blending: THREE.NoBlending,
      side: THREE.BackSide,
      transparent: false,
      depthTest: false,
    });

    let terrain = new THREE.Mesh(this.geo, material);
    terrain.position.set(0, -180, -3000);
    terrain.rotation.y = Math.PI / 2 + 1.35;

    let light = new THREE.PointLight(0xffffff, 8, 5500);
    light.position.set(0, 1200, -3500);
    light.castShadow = false;
    light.color = commonColor;

    this.group.add(terrain);
    this.group.add(light);
    threeObj.scene.add(this.group);
  },
};
