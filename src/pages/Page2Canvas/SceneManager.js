import React, { Component } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { objects } from "./objects";
import { animation } from "./animation";
import { guiConfig } from "./guiConfig";

import "./page2.css";

const Theme = { _darkred: 0x000000 };

class SceneManager extends Component {
  // マウントされたら
  componentDidMount() {
    this.start = Date.now();
    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();
    this.createGUI();
    window.addEventListener("resize", this.handleWindowResize);
  }
  // アンマウントされたら
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    // this.controls.dispose();
    this.gui.destroy();
  }

  //  threeの基本設定関数
  sceneSetup = () => {
    // this.mountは DOM ノードもしくは React の要素にアクセス
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(Theme._darkred, 8, 20);
    this.scene.background = new THREE.Color(Theme._darkred);
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 9;
    // this.controls = new OrbitControls(this.camera, this.mount);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.mount.appendChild(this.renderer.domElement); // mount using React ref
  };

  // オプション設定
  options = {
    perlin: {
      vel: 0.002,
      speed: 0.0005,
      perlins: 1.0,
      decay: 0.1,
      complex: 0.3,
      waves: 20.0,
      eqcolor: 11.0,
      fragment: true,
      redhell: true,
    },
    spin: {
      sinVel: 0.0,
      ampVel: 80.0,
    },
  };

  //  モデル読み込みの類
  addCustomSceneObjects = () => {
    objects(this);
  };

  // GUI
  createGUI = () => {
    guiConfig(this);
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

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    this.camera.updateProjectionMatrix();
  };

  render() {
    return (
      <>
        <div id="webgl" ref={(ref) => (this.mount = ref)}>
          <div className="container">
            <h1>strong Perlin Noise</h1>
          </div>
        </div>
      </>
    );
  }
}

export default SceneManager;
