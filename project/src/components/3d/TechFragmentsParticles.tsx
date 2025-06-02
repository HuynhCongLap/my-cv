import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 400;
const COLORS = ["#00ffff", "#bb00ff", "#00ff8c", "#0088ff"];

export default function HeroBackgroundParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 5;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = Math.sin(angle) * radius;
      arr[i * 3 + 2] = -Math.random() * 20;
    }
    return arr;
  }, []);

  const colors = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const hex = new THREE.Color(COLORS[i % COLORS.length]);
      arr[i * 3] = hex.r;
      arr[i * 3 + 1] = hex.g;
      arr[i * 3 + 2] = hex.b;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3 + 2] += 0.015; // ⏪ chậm hơn
      if (pos[i * 3 + 2] > 2) pos[i * 3 + 2] = -20;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045} // 👈 nhỏ hơn
        vertexColors
        transparent
        opacity={0.8}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
