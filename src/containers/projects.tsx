import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { Centered, Section, FullBleedWrapper } from '../components/sections';
import { LongCopy, PageTitle } from '../components/heading';

export default function ProjectsSection(): JSX.Element {
  return (
    <Section
      id='projects'
      color={'#373F51'}
      style={{
        backgroundImage:
          'radial-gradient(circle at 2px 2px, #222 1px, transparent 0)',
        backgroundSize: '50px 50px',
      }}
    >
      <PageTitle>Projects</PageTitle>
    </Section>
  );
}
