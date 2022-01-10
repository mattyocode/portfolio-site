import React, { useState, useEffect, useRef } from 'react';
import { Section, Centered, Relative } from '../components/layout';
import { PageTitle } from '../components/heading';
import ProjectCarousel from '../components/carousel';
import { ProjectDataObject } from '../types';

export default function ProjectsSection({
  projectData,
  navRef,
}: {
  projectData: ProjectDataObject[];
  navRef: React.Ref<HTMLDivElement>;
}): JSX.Element {
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
      <Relative>
        <PageTitle>Projects</PageTitle>
      </Relative>
      <Centered>
        <ProjectCarousel projectData={projectData} />
      </Centered>
    </Section>
  );
}
