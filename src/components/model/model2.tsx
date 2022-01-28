import React, { useEffect, useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

export default function Model() {
  const { scene } = useLoader(GLTFLoader, '/brackets2.gltf');

  return (
    <>
      <primitive object={scene} dispose={null} />
    </>
  );
}
