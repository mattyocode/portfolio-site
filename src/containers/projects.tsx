import React, { useState, useEffect, useRef } from 'react';
import { Section, Centered, SectionRefProps } from '../components/layout';
import { PageTitle } from '../components/heading';
import ProjectCarousel from '../components/carousel';

export default function ProjectsSection({
  navRef,
}: SectionRefProps): JSX.Element {
  return (
    <Section
      id='projects'
      ref={navRef}
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
