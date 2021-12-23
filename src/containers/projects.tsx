import React, { useState, useEffect, useRef } from 'react';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { Centered, Section, FullBleedWrapper } from '../components/sections';
import { LongCopy, PageTitle } from '../components/heading';
import ProjectCarousel from '../components/carousel';

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
          alignItems: 'flex-end',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ProjectCarousel />
      </div>
    </Section>
  );
}
