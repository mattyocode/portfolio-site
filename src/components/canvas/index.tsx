import React, { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, Vector3, ThreeEvent } from '@react-three/fiber';

import { Cloud } from '@react-three/drei/core/Cloud.cjs';

import useWindowDimensions from '../../helpers/useWindowDimensions';
import { CanvasWrapper } from './styles/canvas';

function CloudParticle({
  clickHandler,
}: {
  clickHandler: (e: ThreeEvent<MouseEvent>) => void;
}) {
  const [itemPosition, setItemPosition] = useState<Vector3>([0, -1, 0]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width && width < 768) {
      setItemPosition([4, 0, 0]);
    } else {
      setItemPosition([0, 0, 0]);
    }
  }, [width]);

  return (
    <mesh scale={0.55} position={itemPosition} onClick={clickHandler}>
      <group>
        <Cloud speed={1} position={[-6, 3, 0]} args={[3, 2]} />
        <Cloud speed={0.8} position={[-4, 3, 0]} args={[3, 2]} />
        <Cloud speed={0.7} args={[3, 2]} />
        <Cloud speed={0.8} position={[2, 3, 0]} args={[3, 2]} />
        <Cloud speed={1} position={[5, 2, 0]} args={[3, 2]} />
      </group>
    </mesh>
  );
}

export default function CanvasContainer({
  initialColorIdx = 0,
  opacity = undefined,
}: {
  initialColorIdx?: number;
  opacity?: undefined | string;
}) {
  const [color, setColor] = useState<number>(initialColorIdx);
  const group = useRef();

  const colors = [
    '#ffffff',
    '#91f2a3',
    '#ff8966',
    '#ff9fe5',
    '#3e8989',
    '#59A7BB',
  ];
  const setCloudColor = (e: ThreeEvent<MouseEvent>): void => {
    let colorIdx = Math.floor(Math.random() * colors.length);
    if (colorIdx === color) {
      colorIdx = (colorIdx + 1) % colors.length;
    }
    setColor(colorIdx);
  };
  return (
    <CanvasWrapper opacity={opacity}>
      <Canvas camera={{ position: [-5, 2, 10], fov: 100 }}>
        <Suspense fallback={null}>
          <group ref={group} dispose={null}>
            <ambientLight color={colors[color]} />
            <CloudParticle clickHandler={setCloudColor} />
          </group>
        </Suspense>
      </Canvas>
    </CanvasWrapper>
  );
}
