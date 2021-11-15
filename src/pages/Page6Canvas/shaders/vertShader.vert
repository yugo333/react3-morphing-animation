// varyingha はfragmentに送る変数
varying vec2 vUv;

void main() {
	// uv: ShaderMaterialで補完される vec2 型(xy)の変数。テクスチャ座標のこと。
	vUv = uv;

	vec3 pos =position;
	// (pos.y * .5)で縦の厚みを半分に。sin(pos.x *6.0)でx軸をsine派に（*6.部分で波の間隔調整）。* .3で縦幅調整
	pos.y = (pos.y * .5) + sin(pos.x *6.) * .3;
  // 決まり文句
	vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
}