import React, { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 16;
const COLORS = ["#31fff6", "#38e3ff", "#18ff6c", "#9d8fff"];

export default function TechFragmentsParticles() {
  const { viewport } = useThree();
  const group = useRef<THREE.Group>(null);

  const fragments = useMemo(() => {
    return new Array(COUNT).fill(0).map((_, i) => ({
      x: (Math.random() - 0.5) * viewport.width * 1.2,
      y: (Math.random() - 0.5) * viewport.height * 1.2,
      size: 0.18 + Math.random() * 0.14,
      color: COLORS[i % COLORS.length],
      angle: Math.random() * Math.PI * 2,
      speed: 0.04 + Math.random() * 0.09,
    }));
  }, [viewport.width, viewport.height]);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const time = clock.getElapsedTime();
    group.current.children.forEach((mesh, i) => {
      const f = fragments[i];
      mesh.position.x =
        f.x + Math.sin(time * f.speed + f.angle) * (0.18 + 0.1 * i);
      mesh.position.y =
        f.y + Math.cos(time * f.speed + f.angle) * (0.13 + 0.09 * i);
      mesh.rotation.z = f.angle + time * (0.3 + i * 0.1);
    });
  });

  return (
    <group ref={group}>
      {fragments.map((f, i) => (
        <mesh key={i} position={[f.x, f.y, 0]} rotation={[0, 0, f.angle]}>
          <boxGeometry args={[f.size, f.size * 0.17 + 0.05, 0.08]} />
          <meshStandardMaterial
            color={f.color}
            metalness={0.9}
            roughness={0.22}
            transparent
            opacity={0.87}
            emissive={f.color}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}
