import * as THREE from "three";
import { fireShader } from "./fireShader";

export const shader = {
  mesh: null,
  create(threeObj, color) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    let fireTex = new THREE.TextureLoader().load("fire.png");

    var fireMaterial = new THREE.ShaderMaterial({
      defines: fireShader.defines,
      uniforms: THREE.UniformsUtils.clone(fireShader.uniforms),
      vertexShader: fireShader.vertexShader,
      fragmentShader: fireShader.fragmentShader,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });

    // initialize uniforms

    fireTex.magFilter = fireTex.minFilter = THREE.LinearFilter;
    fireTex.wrapS = fireTex.wrapT = THREE.ClampToEdgeWrapping;

    fireMaterial.uniforms.fireTex.value = fireTex;
    fireMaterial.uniforms.color.value = color || new THREE.Color(0xeeeeee);
    fireMaterial.uniforms.invModelMatrix.value = new THREE.Matrix4();
    fireMaterial.uniforms.scale.value = new THREE.Vector3(1, 1, 1);
    fireMaterial.uniforms.seed.value = Math.random() * 19.19;

    // THREE.Mesh.call(this, new THREE.BoxGeometry(1.0, 1.0, 1.0), fireMaterial);
    this.mesh = new THREE.Mesh(geometry, fireMaterial);
    this.mesh.scale.set(10, 10, 10);
    threeObj.scene.add(this.mesh);
  },

  update(time) {
    if (this.mesh !== null) {
      let ModelMatrix = this.mesh.material.uniforms.invModelMatrix.value;

      this.mesh.updateMatrixWorld();
      // ModelMatrix.getInverse(this.mesh.matrixWorld);
      ModelMatrix.copy(this.mesh.matrixWorld).invert();

      if (time !== undefined) {
        this.mesh.material.uniforms.time.value = time;
      }

      this.mesh.material.uniforms.invModelMatrix.value = ModelMatrix;

      this.mesh.material.uniforms.scale.value = this.mesh.scale;
    }
  },
};
