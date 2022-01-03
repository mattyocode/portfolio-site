import React, { useState, useEffect, useRef } from 'react';
import { Section, Centered } from '../components/layout';
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
      <Centered>
        <ContactForm />
      </Centered>
    </Section>
  );
}
