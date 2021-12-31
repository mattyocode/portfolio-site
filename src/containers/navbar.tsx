import React from 'react';

import { Links, Navbar, ScrollLink } from '../components/navbar';

export default function NavbarContainer() {
  return (
    <Navbar>
      <Links>
        <ScrollLink href='#home'>Home</ScrollLink>
        <ScrollLink href='#about'>About</ScrollLink>
        <ScrollLink href='#projects'>Projects</ScrollLink>
        <ScrollLink href='#contact'>Contact</ScrollLink>
      </Links>
    </Navbar>
  );
}
