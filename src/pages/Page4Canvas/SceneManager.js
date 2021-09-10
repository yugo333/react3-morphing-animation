import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { objects } from "./objects";
import { animation } from "./animation";

import { methods } from "./Methods/index";

import "./page3.scss";

class SceneManager extends Component {
  componentDidMount() {
    this.sceneSetup();
    this.addCustomSceneObjects();
    methods.mountainsObject.create(this);
    methods.groundPlain.create(this);
    methods.shootingStar.create(this);
    methods.starField.create(this);
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
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 20000);
    this.camera.position.set(0, 0, 300);
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      precision: "mediump",
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.sortObjects = true;
    this.renderer.domElement.setAttribute("id", "stageElement");
    this.mount.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  };

  //  モデル読み込みの類
  addCustomSceneObjects = () => {
    objects(this);
  };

  // アニメーション系
  startAnimationLoop = () => {
    animation(this);
    methods.groundPlain.update();
    methods.shootingStar.update();
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  // レスポンシブ
  handleWindowResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    this.camera.updateProjectionMatrix();
  };

  render() {
    return (
      <div
        className="bodyClass2"
        style={{
          backgroundImage: `url('retro-landscape-blue-background-3d-260nw-1989322361のコピー.png')`,
        }}
        ref={(ref) => (this.mount = ref)}
      ></div>
    );
  }
}

export default SceneManager;
