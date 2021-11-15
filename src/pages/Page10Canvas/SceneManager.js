import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { objects } from "./objects";
import { animation } from "./animation";

import "./page10.css";

class SceneManager extends Component {
  componentDidMount() {
    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    // this.controls.dispose();
  }

  //  threeの基本設定関数
  sceneSetup = () => {
    // this.mountは DOM ノードもしくは React の要素にアクセス
    this.width = this.mount.clientWidth;
    this.height = this.mount.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      1000
    );
    this.camera.position.z = 50;
    this.controls = new OrbitControls(this.camera, this.mount);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.mount.appendChild(this.renderer.domElement); // mount using React ref
  };

  //  モデル読み込みの類
  addCustomSceneObjects = () => {
    objects(this);
  };

  // アニメーション系
  startAnimationLoop = () => {
    animation(this);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  // レスポンシブ
  handleWindowResize = () => {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  };

  render() {
    return (
      <>
        <div
          id="canvas10"
          style={{ height: "100vh", width: "100vw" }}
          ref={(ref) => (this.mount = ref)}
        />
      </>
    );
  }
}

export default SceneManager;
