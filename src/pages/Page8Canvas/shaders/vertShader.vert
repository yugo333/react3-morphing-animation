// varyingha はfragmentに送る変数
varying vec2 vUv;

void main() {
	// uv: ShaderMaterialで補完される vec2 型(xy)の変数。テクスチャ座標のこと。
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}