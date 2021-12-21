import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { Centered, Section, FullBleedWrapper } from '../components/sections';
import { LongCopy, PageTitle } from '../components/heading';
import Card from '../components/card';

import { projectData } from '../data/project-data';

export default function ProjectsSection(): JSX.Element {
  const sliderSettings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
        }}
      >
        {projectData &&
          projectData.length > 0 &&
          projectData.map((project, idx) => (
            <Card key={idx} projectData={project} />
          ))}
      </div>
    </Section>
  );
}
