import React, { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 19;
export default function AuroraParticles() {
  const { viewport } = useThree();
  const mesh = useRef<THREE.Points>(null);

  const auroras = useMemo(() => {
    return new Array(COUNT).fill(0).map((_, i) => ({
      x: (i / (COUNT - 1) - 0.5) * viewport.width * 1.1,
      y: Math.sin(i) * 1.1,
      size: 0.19 + Math.random() * 0.25,
      baseColor: i % 2 === 0 ? "#8fefff" : "#ff81f7",
      phase: Math.random() * Math.PI * 2,
      speed: 0.1 + Math.random() * 0.12,
    }));
  }, [viewport.width]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const time = clock.getElapsedTime();
    auroras.forEach((a, i) => {
      const py = Math.sin(a.phase + time * a.speed) * 2.2 + 0.65;
      mesh.current!.geometry.attributes.position.setXYZ(i, a.x, py, 0);
    });
    mesh.current!.geometry.attributes.position.needsUpdate = true;
  });

  const positions = new Float32Array(
    auroras.flatMap((a) => [a.x, a.y, 0])
  );

  const colors = auroras.map((a) => a.baseColor);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.45}
        color="#67e3ff"
        opacity={0.6}
        transparent
        depthWrite={false}
      />
    </points>
  );
}
