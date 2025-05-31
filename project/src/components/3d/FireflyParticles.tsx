import { useRef, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";

// Shader lung linh tông lạnh
class FireflyMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color("#b28dff") },  // tím nhạt pastel
        uColor2: { value: new THREE.Color("#7df9ff") },  // cyan pastel
        uColor3: { value: new THREE.Color("#e9e9ff") },  // xám trắng
        uColor4: { value: new THREE.Color("#feafe8") },  // hồng tím nhẹ
      },
      vertexShader: `
        attribute float aPhase;
        attribute float aSize;
        attribute float aColorMix;
        varying float vPhase;
        varying float vSize;
        varying float vColorMix;
        void main() {
          vPhase = aPhase;
          vSize = aSize;
          vColorMix = aColorMix;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = aSize * 85.0 / clamp(-mvPosition.z, 6.0, 25.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform vec3 uColor4;
        varying float vPhase;
        varying float vSize;
        varying float vColorMix;
        void main() {
          float blink = 0.62 + 0.48 * sin(uTime * 1.5 + vPhase * 5.0);
          float d = length(gl_PointCoord - vec2(0.5));
          float falloff = smoothstep(0.4, 0.07, d);

          // Blend màu lung linh neon, màu tech nhẹ nhàng
          vec3 color = mix(uColor1, uColor2, vColorMix);
          color = mix(color, uColor3, smoothstep(0.5, 1.0, vColorMix));
          color = mix(color, uColor4, smoothstep(0.1, 0.6, vColorMix));
          gl_FragColor = vec4(color * blink, falloff * blink);
          if (gl_FragColor.a < 0.03) discard;
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }
}
extend({ FireflyMaterial });

const FIREFLY_COUNT = 500;

function getInitData(count: number) {
  const positions = new Float32Array(count * 3);
  const basePositions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const sizes = new Float32Array(count);
  const colorMixes = new Float32Array(count); // random để trộn màu
  const speeds = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 15;
    const y = (Math.random() - 0.5) * 6;
    const z = (Math.random() - 0.5) * 7;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    basePositions[i * 3] = x;
    basePositions[i * 3 + 1] = y;
    basePositions[i * 3 + 2] = z;

    phases[i] = Math.random() * Math.PI * 2;
    sizes[i] = 0.3 + Math.random() * 0.09;
    colorMixes[i] = Math.random(); // [0,1]
    speeds[i * 3] = 0.07 + Math.random() * 0.12;
    speeds[i * 3 + 1] = 0.07 + Math.random() * 0.13;
    speeds[i * 3 + 2] = 0.07 + Math.random() * 0.1;
  }
  return { positions, basePositions, phases, sizes, colorMixes, speeds };
}

export default function FireflyParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const { positions, basePositions, phases, sizes, colorMixes, speeds } = useMemo(
    () => getInitData(FIREFLY_COUNT),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.material.uniforms.uTime.value = t;
      // Animate bay nhẹ
      // @ts-ignore
      const posAttr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < FIREFLY_COUNT; i++) {
        posAttr.setX(i, basePositions[i * 3] + Math.sin(t * speeds[i * 3] + phases[i]) * 0.45);
        posAttr.setY(i, basePositions[i * 3 + 1] + Math.cos(t * speeds[i * 3 + 1] + phases[i]) * 0.45);
        posAttr.setZ(i, basePositions[i * 3 + 2] + Math.sin(t * speeds[i * 3 + 2] + phases[i]) * 0.28);
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={FIREFLY_COUNT} itemSize={3} />
        <bufferAttribute attach="attributes-aPhase" array={phases} count={FIREFLY_COUNT} itemSize={1} />
        <bufferAttribute attach="attributes-aSize" array={sizes} count={FIREFLY_COUNT} itemSize={1} />
        <bufferAttribute attach="attributes-aColorMix" array={colorMixes} count={FIREFLY_COUNT} itemSize={1} />
      </bufferGeometry>
      {/* @ts-ignore */}
      <fireflyMaterial />
    </points>
  );
}
