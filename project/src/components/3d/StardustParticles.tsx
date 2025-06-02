import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const STAR_COUNT = 1500;
const BASE_COLORS = [
  '#00ffff', // cyan
  '#1e90ff', // dodger blue
  '#8a2be2', // blue violet
  '#00ff99', // neon green
  '#ffffff', // white
];

// Custom material for soft tech glow
class TechGlowMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        attribute float aPhase;
        attribute float aSize;
        varying float vPhase;
        void main() {
          vPhase = aPhase;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = aSize * 150.0 / -mvPosition.z;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying float vPhase;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          float fade = smoothstep(0.5, 0.1, d);
          float pulse = 0.6 + 0.4 * sin(uTime * 1.2 + vPhase);
          gl_FragColor = vec4(vec3(0.4 + 0.6 * pulse), fade * pulse);
          if (gl_FragColor.a < 0.1) discard;
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }
}

THREE.ShaderMaterial.prototype.isTechGlow = true;

export default function TechParticles() {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, phases, sizes } = useMemo(() => {
    const pos = new Float32Array(STAR_COUNT * 3);
    const phase = new Float32Array(STAR_COUNT);
    const size = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      const radius = Math.random() * 10 + 2;
      const angle = Math.random() * 2 * Math.PI;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      phase[i] = Math.random() * Math.PI * 2;
      size[i] = 0.05 + Math.random() * 0.1;
    }

    return { positions: pos, phases: phase, sizes: size };
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={STAR_COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aPhase"
          array={phases}
          count={STAR_COUNT}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aSize"
          array={sizes}
          count={STAR_COUNT}
          itemSize={1}
        />
      </bufferGeometry>
      {/* @ts-ignore */}
      <primitive object={new TechGlowMaterial()} attach="material" />
    </points>
  );
}
