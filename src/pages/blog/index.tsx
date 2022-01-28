import { useRef, Suspense } from 'react';
import { useEffect } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Canvas, extend, useThree } from '@react-three/fiber';
import Lights from '../../components/lights';

import { PageWrapper } from '../../components/blog/layout';
import { LandingContent } from '../../components/layout';
import { JumboTitle } from '../../components/heading';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Model = dynamic(() => import('../../components/model/model2'), {
  ssr: false,
});

import { CanvasWrapper } from '../../components/canvas/styles/canvas';

extend({ OrbitControls });

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

const Blog: NextPage = () => {
  // const { scene } = useGLTF('*/public/gltf/Brackets.gltf');
  const group = useRef();
  return (
    <PageWrapper>
      <LandingContent flexRow={'row'}>
        <div>
          <JumboTitle>Blog</JumboTitle>
        </div>
        <CanvasWrapper>
          <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
            <Suspense fallback={null}>
              <group ref={group} dispose={null}>
                <Lights />
                <CameraController />
                <mesh scale={0.75} position={[0, -1, 0]}>
                  <Model />
                </mesh>
              </group>
            </Suspense>
          </Canvas>
        </CanvasWrapper>
      </LandingContent>
    </PageWrapper>
  );
};

export default Blog;
