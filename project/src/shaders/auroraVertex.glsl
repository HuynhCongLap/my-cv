uniform float uTime;
varying vec2 vUv;
varying float vWave;

float random(float x) {
  return fract(sin(x) * 43758.5453123);
}

void main() {
  vUv = uv;

  vec3 pos = position;

  // wave distortion + slight flickering
  float wave = sin(pos.x * 8.0 + uTime * 1.2) * 0.25;
  wave += sin(pos.y * 3.0 - uTime * 0.8) * 0.1;
  pos.z += wave;

  vWave = wave;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
