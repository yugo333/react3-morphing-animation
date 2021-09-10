import { GUI } from "dat.gui";

export const guiConfig = (threeObj) => {
  threeObj.gui = new GUI();
  const camGUI = threeObj.gui.addFolder("Camera");
  //cam.add(, 'speed', 0.0, 30.00).listen();
  camGUI.add(threeObj.camera.position, "z", 3, 20).name("Zoom").listen();
  camGUI
    .add(threeObj.options.perlin, "vel", 0.0, 0.02)
    .name("Velocity")
    .listen();
  //camGUI.open();

  const mathGUI = threeObj.gui.addFolder("Math Options");
  mathGUI.add(threeObj.options.spin, "sinVel", 0.0, 0.5).name("Sine").listen();
  mathGUI
    .add(threeObj.options.spin, "ampVel", 0.0, 90.0)
    .name("Amplitude")
    .listen();
  //mathGUI.open();

  const perlinGUI = threeObj.gui.addFolder("Setup Perlin Noise");
  perlinGUI
    .add(threeObj.options.perlin, "perlins", 1.0, 5.0)
    .name("Size")
    .step(1);
  perlinGUI
    .add(threeObj.options.perlin, "speed", 0.0, 0.0005)
    .name("Speed")
    .listen();
  perlinGUI
    .add(threeObj.options.perlin, "decay", 0.0, 1.0)
    .name("Decay")
    .listen();
  perlinGUI
    .add(threeObj.options.perlin, "waves", 0.0, 20.0)
    .name("Waves")
    .listen();
  perlinGUI.add(threeObj.options.perlin, "fragment", true).name("Fragment");
  perlinGUI
    .add(threeObj.options.perlin, "complex", 0.1, 1.0)
    .name("Complex")
    .listen();
  perlinGUI.add(threeObj.options.perlin, "redhell", true).name("Electroflow");
  perlinGUI
    .add(threeObj.options.perlin, "eqcolor", 0.0, 15.0)
    .name("Hue")
    .listen();
  perlinGUI.open();
};
