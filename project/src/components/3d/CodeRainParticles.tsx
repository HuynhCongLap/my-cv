import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const COLUMN_COUNT = 24;
const SYMBOLS_PER_COL = 9;

const SYMBOLS =
  'アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

function randomSymbol() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

interface Drop {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  fontSize: number;
  alpha: number;
}

const CodeRainParticles: React.FC = () => {
  const { viewport } = useThree();

  const drops = useMemo<Drop[]>(() => {
    return Array.from({ length: COLUMN_COUNT }).map((_, i) => ({
      x:
        -viewport.width / 2 +
        (viewport.width / COLUMN_COUNT) * i +
        (i % 2 === 0 ? 0.08 : -0.08),
      y: Math.random() * viewport.height,
      speed: 0.7 + Math.random() * 0.32,
      chars: Array.from({ length: SYMBOLS_PER_COL }).map(randomSymbol),
      fontSize: 0.14 + Math.random() * 0.08,
      alpha: 0.62 + Math.random() * 0.19, // tăng alpha lên!
    }));
  }, [viewport.width, viewport.height]);

  const textRefs = useRef<(THREE.Object3D | null)[][]>(
    Array.from({ length: COLUMN_COUNT }, () => Array(SYMBOLS_PER_COL).fill(null))
  );

  useFrame((_, delta) => {
    drops.forEach((drop, colIdx) => {
      drop.y -= drop.speed * delta;
      if (drop.y < -viewport.height / 2 - 1) {
        drop.y = viewport.height / 2 + Math.random();
        drop.chars = Array.from({ length: SYMBOLS_PER_COL }).map(randomSymbol);
      }
      drop.chars = drop.chars.map((char, idx) =>
        Math.random() < 0.028 + idx * 0.012 ? randomSymbol() : char
      );
      for (let rowIdx = 0; rowIdx < SYMBOLS_PER_COL; rowIdx++) {
        const ref = textRefs.current[colIdx][rowIdx];
        if (ref) {
          const y = drop.y - rowIdx * drop.fontSize * 1.25;
          ref.position.set(drop.x, y, 0);
          // @ts-ignore
          ref.material.opacity =
            drop.alpha * (rowIdx === 0 ? 0.85 : Math.max(0.22, 1 - rowIdx * 0.16));
        }
      }
    });
  });

  return (
    <>
      {drops.map((drop, colIdx) =>
        drop.chars.map((char, rowIdx) => (
          <Text
            key={`${colIdx}_${rowIdx}`}
            ref={ref => {
              textRefs.current[colIdx][rowIdx] = ref;
            }}
            position={[drop.x, drop.y - rowIdx * drop.fontSize * 1.25, 0]}
            fontSize={drop.fontSize}
            color={rowIdx === 0 ? "#e0fff5" : "#3effc3"}
            fillOpacity={rowIdx === 0 ? 0.82 : 0.37}
            anchorX="center"
            anchorY="middle"
            material-transparent
          >
            {char}
          </Text>
        ))
      )}
    </>
  );
};

export default CodeRainParticles;
