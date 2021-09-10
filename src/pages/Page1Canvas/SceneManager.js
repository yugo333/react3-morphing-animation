import React, { Component } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { objects } from "./objects";
import { animation } from "./animation";
import { scrollAnimation } from "./scrollAnimation";

import "./page1.css";

class SceneManager extends Component {
  componentDidMount() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    this.sceneSetup();
    this.addCustomSceneObjects();
    this.startAnimationLoop();
    this.setScroll();
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
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
    // this.controls = new OrbitControls(this.camera, this.mount);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.mount.appendChild(this.renderer.domElement); // mount using React ref
  };

  //  モデル読み込みの類
  addCustomSceneObjects = () => {
    const { mesh, group } = objects(this);
    this.group = group;
    this.mesh = mesh;
  };

  // アニメーション系
  startAnimationLoop = () => {
    animation(this);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  // スクロールアニメーション
  setScroll = () => {
    scrollAnimation(this);
  };

  // レスポンシブ
  handleWindowResize = () => {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    this.camera.updateProjectionMatrix();
  };

  text = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  };

  render() {
    return (
      <>
        <div
          id="webgl"
          // style={{ height: "90vh", width: "100vw" }}
          ref={(ref) => (this.mount = ref)}
        />
        <div className="s text_title s-1">webgl sample</div>
        <div className="s2 text_l s-15">{this.text()}</div>
        <div className="s s-2"></div>
        <div className="s2 text_canter s-25">Hello World</div>
        <div className="s s-3"></div>
        <div className="s2 text_r s-35">{this.text()}</div>
        <div className="s s-4"></div>
        <div className="s2 text_canter s-45">thank you</div>
        <div className="s2 text_canter s-5">LIG</div>
      </>
    );
  }
}

export default SceneManager;
