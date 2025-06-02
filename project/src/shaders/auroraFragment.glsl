uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;

varying vec2 vUv;
varying float vWave;

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
  float glow = smoothstep(0.2, 1.0, vUv.y + sin(uTime + vUv.x * 3.0) * 0.1);
  float noise = rand(vUv * uTime * 0.1);
  float intensity = glow + noise * 0.15;

  vec3 color = mix(uColor1, uColor2, vUv.y + noise * 0.2);
  color *= intensity;

  gl_FragColor = vec4(color, intensity * 0.9);
}
