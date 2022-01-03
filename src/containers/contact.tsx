import React, { useState, useEffect, useRef } from 'react';
import { Section, Centered } from '../components/layout';
import { PageTitle } from '../components/heading';
import ContactForm from '../components/form';

export default function ContactSection(): JSX.Element {
  const backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23529AAD' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");`;

  return (
    <Section id='contact' color={'#59A7BB'} backgroundImage={backgroundImage}>
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
