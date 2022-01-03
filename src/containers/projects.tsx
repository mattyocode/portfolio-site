import React, { useState, useEffect, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';
import { Section, Centered } from '../components/layout';
import { PageTitle } from '../components/heading';
import ProjectCarousel from '../components/carousel';

// import { projectData } from '../data/project-data';

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
        <PageTitle>Projects</PageTitle>
      </div>
      <Centered>
        <ProjectCarousel />
      </Centered>
    </Section>
  );
}
