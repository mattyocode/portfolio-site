import React, { useState, useEffect, useRef } from 'react';
import {
  CarouselProvider,
  DotGroup,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { Centered, Section, FullBleedWrapper } from '../components/sections';
import { LongCopy, PageTitle } from '../components/heading';
import Card from '../components/card';

import { projectData } from '../data/project-data';

export default function ProjectsSection(): JSX.Element {
  return (
    <Section
      id='projects'
      color={'#373F51'}
      style={{
        backgroundImage:
          'radial-gradient(circle at 2px 2px, #666 1px, transparent 0)',
        backgroundSize: '50px 50px',
      }}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        <PageTitle relative={false}>Projects</PageTitle>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <CarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={400}
          totalSlides={2}
        >
          <Slider
            style={{
              width: '100vw',
              height: '80vh',
            }}
          >
            {projectData &&
              projectData.length > 0 &&
              projectData.map((project, idx) => (
                <Slide key={idx} index={idx}>
                  <Card projectData={project} />
                  {/* {project.title} */}
                </Slide>
              ))}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
        {/* <CarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={300}
          totalSlides={2}
        >
          <Slider>
            {projectData &&
              projectData.length > 0 &&
              projectData.map((project, idx) => (
                <Slide
                  key={idx}
                  index={idx}
                  // style={{
                  //   width: '500px',
                  // }}
                >
                  <Card projectData={project} />
                </Slide>
              ))}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <DotGroup />
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider> */}
      </div>
    </Section>
  );
}
