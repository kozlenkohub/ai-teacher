'use client';
import React, { use } from 'react';
import { useGLTF } from '@react-three/drei';

const teachers = ['Nanami', 'Naoki'];

const Teacher = ({ teacher, ...props }) => {
  const { scene } = useGLTF(`/models/Teacher_${teacher}.glb`);
  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  );
};

teachers.forEach((teacher) => {
  useGLTF.preload(`/models/Teacher_${teacher}.glb`);
});

export default Teacher;
