import { useRef, Suspense } from 'react';
import { useEffect } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Canvas, extend, useThree } from '@react-three/fiber';
import Lights from '../../components/lights';

import { PageWrapper } from '../../components/blog/layout';
import { JumboTitle, LongCopy } from '../../components/heading';
import {
  BlogLandingContent,
  BlogCanvasWrapper,
} from '../../components/blog/layout';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Model = dynamic(() => import('../../components/model/model2'), {
  ssr: false,
});

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
  const group = useRef();
  return (
    <PageWrapper>
      <BlogLandingContent>
        <BlogCanvasWrapper>
          <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
            <Suspense fallback={null}>
              <group ref={group} dispose={null}>
                <Lights />
                {/* <CameraController /> */}
                <Model />
              </group>
            </Suspense>
          </Canvas>
        </BlogCanvasWrapper>
        <div style={{ width: '35rem' }}>
          <JumboTitle>Blog</JumboTitle>
        </div>
      </BlogLandingContent>
      <LongCopy style={{ textAlign: 'center', fontSize: '1.2rem' }}>
        Writing about web development, the joy of code. <br />
        Plus some thoughts on technology trends.
      </LongCopy>
    </PageWrapper>
  );
};

export default Blog;
