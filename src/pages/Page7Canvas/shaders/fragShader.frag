uniform float uTime;

varying vec2 vUv;

void main( void ) {
    // ここで面の対格のvecの双方からグラデーションさせる。vUvだけでは0→1の方向にグラデーションが起きる
    vec2 position = - 1.0 + 2.0 * vUv;

    float red = abs( sin( position.x * position.y + uTime / 5.0 ) );
    float green = abs( sin( position.x * position.y + uTime / 4.0 ) );
    float blue = abs( sin( position.x * position.y + uTime / 3.0 ) );
    gl_FragColor = vec4( red, green, blue, 1.0 );

}