import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const scrollAnimation = (threeObj) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      defaults: {},
      // scrollTrigger: {
      //   trigger: "body",
      //   start: "top top",
      //   end: "bottom bottom",
      //   scrub: 0.0,
      // },
    })
    .to(threeObj.group.scale, {
      x: 3,
      y: 3,
      z: 3,
    })
    .to(threeObj.mesh.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      z: Math.PI * 2,
    });
  gsap.to(threeObj.group.position, {
    x: 5,
    scrollTrigger: {
      trigger: ".s-1",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.to(threeObj.mesh.material.uniforms.u_sec1, {
    value: 1.0,
    scrollTrigger: {
      trigger: ".s-1",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 0.7,
    },
  });
  // 下記を記載しないと次のgsap.to(threeObj.group.positionが0が開始位置でアニメーションされるので注意
  threeObj.group.position.x = 5;

  gsap.to(threeObj.group.position, {
    x: 0,
    scrollTrigger: {
      trigger: ".s-2",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.to(threeObj.mesh.material.uniforms.u_sec2, {
    value: 1.0,
    scrollTrigger: {
      trigger: ".s-2",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 0.7,
    },
  });
  // 下記を記載しないと次のgsap.to(threeObj.group.positionが0が開始位置でアニメーションされるので注意
  threeObj.group.position.x = 0;

  gsap.to(threeObj.group.position, {
    x: -5,
    scrollTrigger: {
      trigger: ".s-3",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.to(threeObj.mesh.material.uniforms.u_sec3, {
    value: 1.0,
    scrollTrigger: {
      trigger: ".s-3",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 0.7,
    },
  });
  // 下記を記載しないと次のgsap.to(threeObj.group.positionが0が開始位置でアニメーションされるので注意
  threeObj.group.position.x = -5;

  gsap.to(threeObj.group.position, {
    x: 0,
    scrollTrigger: {
      trigger: ".s-4",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  gsap.to(threeObj.mesh.material.uniforms.u_sec4, {
    value: 1.0,
    scrollTrigger: {
      trigger: ".s-4",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 0.7,
    },
  });
  // 下記を記載しないと次のgsap.to(threeObj.group.positionが0が開始位置でアニメーションされるので注意
  threeObj.group.position.x = 0;
};

// https://www.to-r.net/media/scrolltrigger/
// gsap.to('.a', { // 動かしたい要素は".a"
//   x: 500, // 右方向に500動く
//   duration: 1, // アニメーションは1秒間
//   scrollTrigger: {
//     trigger: '.a', // 要素".a"がビューポートに入ったときにアニメーション開始
//     start: 'center center', // アニメーション開始位置
//     markers: true // マーカー表示
//   }
// })
