import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const MODEL_PATH = '/models/myself.glb';

const MyAvatarGLB: React.FC = () => {
  const group = useRef<THREE.Group>(null!);
  const gltf = useGLTF(MODEL_PATH);
  const { actions, names } = useAnimations(gltf.animations, group);

  useEffect(() => {
    if (names.length > 0) {
      actions[names[0]]?.reset().fadeIn(0.3).play();
    }
  }, [actions, names]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Di chuyển elip mềm mại bằng 1 tần số, offset để luôn trong màn hình
    // Điều chỉnh biên độ cho phù hợp với layout thực tế của bạn
    const x = Math.cos(t * 0.15) * 1;     // Biên độ trái/phải, nhỏ hơn width scene/camera
    const y = Math.sin(t * 0.15) * 0.01 + 0.2; // Biên độ lên/xuống, offset lên giữa màn hình

    // Nếu cần chuyển động 3D nhẹ (không vượt viền):
    const z = Math.sin(t * 0.12) * 1.2;

    group.current.position.set(x, y, z);

    // Nhẹ nhàng quay khi bay
    group.current.rotation.y = Math.sin(t * 0.12) * 0.3;
    group.current.rotation.z = Math.sin(t * 0.09) * 0.12;
    group.current.rotation.x = Math.cos(t * 0.1) * 0.08;
  });

  return (
    <group ref={group} scale={0.5}>
      <primitive object={gltf.scene} />
    </group>
  );
};

const Avatar: React.FC = () => {
  return (
    <>
      <ambientLight intensity={1.15} />
      <directionalLight position={[0, 8, 6]} intensity={1.1} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} color="#00FFFF" intensity={0.16} />
      <MyAvatarGLB />
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
        rotateSpeed={0.5}
      />
    </>
  );
};

export default Avatar;
