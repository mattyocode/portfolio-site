import { useRef, Suspense } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
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

import {
  FullBleedWrapper,
  Section,
  LandingContent,
  ProfilePicWrapper,
} from '../../components/layout';
import ContactIcons from '../../components/icon-links';
import { LandingCopy } from '../../components/heading';

import { ContactLinks } from '../../data/contact-links';

// const Model = dynamic(() => import('../../components/model/model2'), {
//   ssr: false,
// });

// extend({ OrbitControls });

// const CameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(() => {
//     const controls = new OrbitControls(camera, gl.domElement);
//     controls.minDistance = 3;
//     controls.maxDistance = 20;
//     return () => {
//       controls.dispose();
//     };
//   }, [camera, gl]);
//   return null;
// };

const CanvasContainer = dynamic(() => import('../../components/canvas'));

const Blog: NextPage = () => {
  const group = useRef();
  return (
    <PageWrapper>
      <Section id='home' backgroundImage='url("/img/nightsky.jpg")'>
        <FullBleedWrapper>
          <CanvasContainer initialColorIdx={5} />
          <LandingContent>
            <ProfilePicWrapper>
              <Image
                src='/img/profilepiccoral.svg'
                alt='illustration of site author'
                width='250'
                height='250'
                layout='responsive'
                objectFit='contain'
                priority
              />
            </ProfilePicWrapper>
            <LandingCopy>
              <JumboTitle>Blog</JumboTitle>
            </LandingCopy>
          </LandingContent>
          <ContactIcons links={ContactLinks} />
        </FullBleedWrapper>
      </Section>
      {/* <BlogLandingContent>
        <BlogCanvasWrapper>
          <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
            <Suspense fallback={null}>
              <group ref={group} dispose={null}>
                <Lights />
                <Model />
              </group>
            </Suspense>
          </Canvas>
        </BlogCanvasWrapper>
        <div style={{ width: '35rem' }}>
          <JumboTitle>Blog</JumboTitle>
        </div>
      </BlogLandingContent>*/}
      <LongCopy style={{ textAlign: 'center', fontSize: '1.2rem' }}>
        Writing about web development and the joy of code. <br />
        Occasional thoughts on technology trends.
      </LongCopy>
    </PageWrapper>
  );
};

export default Blog;
