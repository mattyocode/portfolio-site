import React, { useRef, useEffect, Suspense, useState } from 'react';

import { Canvas, useThree, MeshProps } from '@react-three/fiber';
import { useTexture, Cloud, OrbitControls } from '@react-three/drei';

import { CanvasWrapper } from './styles/canvas';

function CloudParticle({ clickHandler }) {
  const [itemPosition, setItemPosition] = useState([0, -1, 0]);
  const { viewport } = useThree();

  useEffect(() => {
    if (viewport.width < 25.75) {
      setItemPosition([5, -3, 0]);
    } else {
      setItemPosition([0, -1, 0]);
    }
  }, [viewport]);

  return (
    <mesh scale={0.55} position={itemPosition} onClick={clickHandler}>
      <group>
        <Cloud speed={1} position={[-4, -2, 0]} args={[3, 2]} />
        <Cloud speed={1} position={[-3, 3, 0]} args={[3, 2]} />
        <Cloud speed={1} args={[3, 2]} />
        <Cloud speed={1} position={[4, -2, 0]} args={[3, 2]} />
        <Cloud speed={1} position={[4, 2, 0]} args={[3, 2]} />
      </group>
    </mesh>
  );
}

export default function CanvasContainer() {
  const [color, setColor] = useState(0);
  const group = useRef();

  const colors = [
    '#ffffff',
    '#91f2a3',
    '#ff8966',
    '#ff9fe5',
    '#3e8989',
    '#ffffff',
  ];
  const setCloudColor = () => {
    let colorIdx = Math.floor(Math.random() * colors.length);
    setColor(colorIdx);
  };
  return (
    <CanvasWrapper>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 100 }}>
        <Suspense fallback={null}>
          <group ref={group} dispose={null}>
            <ambientLight color={colors[color]} />
            {/* <pointLight position={[5, 5, 0]} color={'#'} /> */}
            <CloudParticle clickHandler={setCloudColor} />
          </group>
          {/* <OrbitControls enablePan={false} zoomSpeed={0.5} /> */}
        </Suspense>
      </Canvas>
    </CanvasWrapper>
  );
}
