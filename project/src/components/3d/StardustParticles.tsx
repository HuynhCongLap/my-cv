import { useRef, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";

// Các màu phù hợp cho nền tối/UI tech
const COLOR_PALETTE = [
  "#73C9FF", // Cyan blue
  "#35E5D8", // Aqua
  "#8D6EFF", // Light purple
  "#31E1FF", // Light blue
  "#00FFD0", // Neon teal
  "#49A9FF", // Blue
  "#E566FF", // Pink/magenta
  "#FFD6FA", // Light pastel magenta
  "#B3FFFF", // Pastel aqua
  "#51FFFB", // Light teal
  "#7C82FF", // Lavender blue
  "#FFF8FA", // Almost white
  "#99A3FF", // Soft periwinkle
];

class StardustMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 }
      },
      vertexShader: `
        attribute float aPhase;
        attribute float aSize;
        attribute vec3 aColor;
        varying float vPhase;
        varying float vSize;
        varying vec3 vColor;
        void main() {
          vPhase = aPhase;
          vSize = aSize;
          vColor = aColor;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = aSize * 120.0 / -mvPosition.z; // Scale với depth
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying float vPhase;
        varying float vSize;
        varying vec3 vColor;
        void main() {
          float blink = 0.5 + 0.7 * sin(uTime * 1.25 + vPhase);
          // Radial gradient (cho chấm mượt, kiểu soft round glow)
          float d = length(gl_PointCoord - vec2(0.5));
          float falloff = smoothstep(0.48, 0.22, d);
          gl_FragColor = vec4(vColor * blink, falloff * blink);
          if (gl_FragColor.a < 0.11) discard; // Xóa viền
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }
}
extend({ StardustMaterial });

const STAR_COUNT = 1900;

export default function StardustParticles() {
  const meshRef = useRef<THREE.Points>(null);

  // Generate palette as vec3 for GPU
  const PALETTE = useMemo(() => COLOR_PALETTE.map(hex => {
    const c = new THREE.Color(hex);
    return [c.r, c.g, c.b];
  }), []);

  // Tạo data random (xyz, phase, size, color)
  const { positions, phases, sizes, colors } = useMemo(() => {
    const pos = new Float32Array(STAR_COUNT * 3);
    const phase = new Float32Array(STAR_COUNT);
    const size = new Float32Array(STAR_COUNT);
    const color = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      phase[i] = Math.random() * Math.PI * 2;

      // Clamp size, phần lớn nhỏ, chỉ vài cái to
      let r = Math.random();
      size[i] = 0.07 + Math.random() * 0.08; // (0.07–0.15) cho tất cả

      // Chọn random từ palette, 80% là blue-cyan/purple, 20% là magenta/aqua/white
      let ci = Math.floor(Math.random() * (PALETTE.length * (r < 0.8 ? 0.7 : 1)));
      ci = Math.min(ci, PALETTE.length - 1);
      color[i * 3] = PALETTE[ci][0];
      color[i * 3 + 1] = PALETTE[ci][1];
      color[i * 3 + 2] = PALETTE[ci][2];
    }
    return { positions: pos, phases: phase, sizes: size, colors: color };
  }, [PALETTE]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.13) * 0.05 + clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={STAR_COUNT} itemSize={3} />
        <bufferAttribute attach="attributes-aPhase" array={phases} count={STAR_COUNT} itemSize={1} />
        <bufferAttribute attach="attributes-aSize" array={sizes} count={STAR_COUNT} itemSize={1} />
        <bufferAttribute attach="attributes-aColor" array={colors} count={STAR_COUNT} itemSize={3} />
      </bufferGeometry>
      {/* @ts-ignore */}
      <stardustMaterial />
    </points>
  );
}
