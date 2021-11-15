varying vec2 vUv;

uniform float frame;
uniform float uTime;
uniform float modelHeight;
uniform vec3 swingVec;
uniform float swingStrength;

void main() {
  vUv = uv;

  //PIは定義されていないようなので自分で定義する
  const float PI = 3.14159265359;
  float waveNum = 2.;
  // 高さの位置を0〜1.0の位置に合わせる
  float fit0Position = position.y + modelHeight/2.0;
  float positionNormalized = fit0Position / modelHeight;

  // 揺れ幅の調整を行う
  float strength = swingStrength * positionNormalized;
  // 揺れの早さ(uTime) 3Dモデル内の揺れの個数を指定する(positionNormalized * waveNum * PI )
  float wave = sin(uTime + positionNormalized * waveNum * PI) * strength; 
   // 新しい頂点位置の生成
  vec3 newPosition = position + (swingVec * wave);

  gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );

}