import React, { useRef, useEffect, Suspense, useState } from 'react';
import dynamic from 'next/dynamic';

import { Canvas, useThree } from '@react-three/fiber';
import { useTexture, Cloud, OrbitControls } from '@react-three/drei';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';

import { CanvasWrapper } from './styles/canvas';

// function CloudParticle() {
//   const ref = useRef();
//   const cloudMap = useTexture('img/cloud.png');
//   return (
//     <mesh
//       visible
//       position={[Math.random() * 800 - 400, 500, Math.random() * 500 - 500]}
//       rotation={[1.16, -0.12, Math.random() * 2 * Math.PI]}
//     >
//       <planeBufferGeometry args={[500, 500]} attach='geometry' />
//       <meshLambertMaterial map={cloudMap} attach='material' transparent />
//     </mesh>
//   );
// }

function CloudParticle({}) {
  const [itemPosition, setItemPosition] = useState([0, 0, 0]);
  const cloudPositionRef = useRef();
  const cloudMap = useTexture('img/cloud.png');
  const { viewport } = useThree();
  // useEffect(() => {
  //   if (viewport.width <= 768) {
  //     setItemPosition([3, -3, 0]);
  //   } else {
  //     setItemPosition([0, 0, 0]);
  //   }
  // }, [viewport.width]);
  return (
    <mesh scale={0.55} position={itemPosition}>
      <Cloud speed={1} position={[-4, -2, 0]} args={[3, 2]} />
      <Cloud speed={1} position={[-4, 2, 0]} args={[3, 2]} />
      <Cloud speed={1} args={[3, 2]} />
      <Cloud speed={1} position={[4, -2, 0]} args={[3, 2]} />
      <Cloud speed={1} position={[4, 2, 0]} args={[3, 2]} />
    </mesh>
  );
}

export default function CanvasContainer() {
  const group = useRef();
  return (
    <CanvasWrapper>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 100 }}>
        <Suspense fallback={null}>
          <group ref={group} dispose={null}>
            {/* <Light brightness={10} color={'white'} /> */}
            <ambientLight />
            <CloudParticle />
          </group>
          {/* <OrbitControls enablePan={false} zoomSpeed={0.5} /> */}
        </Suspense>
      </Canvas>
    </CanvasWrapper>
  );
}
