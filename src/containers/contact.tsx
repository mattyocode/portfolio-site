import React, { useState, useEffect, useRef } from 'react';
import { Section } from '../components/sections';
import { PageTitle } from '../components/heading';
import ContactForm from '../components/form';

export default function ContactSection(): JSX.Element {
  return (
    <Section id='contact' color={'#59A7BB'}>
      <div
        style={{
          position: 'relative',
        }}
      >
        <PageTitle>Contact</PageTitle>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          marginTop: '1rem',
        }}
      >
        <ContactForm />
      </div>
    </Section>
  );
}
