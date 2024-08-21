'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, CameraControls, Environment, Gltf, OrbitControls } from '@react-three/drei';

const Experience = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 0.0001] }}>
        <OrbitControls />
        <CameraManager />
        <Environment preset="sunset" />

        <ambientLight intensity={0.8} color="pink" />
        <Gltf src="/models/classroom_default.glb" position={[0.2, -1.7, -2]} />
      </Canvas>
    </>
  );
};

const CameraManager = () => {
  return (
    <CameraControls
      minZoom={1}
      maxZoom={3}
      polarRotateSpeed={-0.3}
      azimuthAngle={-0.3}
      mouseButtons={{ left: 1, wheel: 16 }}
      touches={{ one: 32, two: 512 }}></CameraControls>
  );
};

export default Experience;
