import React, { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

interface RefObject {
  rotation: {
    y: number;
  };
}

export default function Model() {
  const { scene } = useLoader(GLTFLoader, '/brackets2.gltf');
  const mesh = React.useRef<RefObject>();
  useFrame(() => (mesh.current ? (mesh.current.rotation.y += 0.01) : null));

  return (
    <mesh ref={mesh} scale={0.75} position={[0, -1, 0]}>
      <primitive object={scene} dispose={null} />
    </mesh>
  );
}
