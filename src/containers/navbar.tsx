import React from 'react';
import { useRouter } from 'next/router';
import { Links, Navbar, ScrollLink } from '../components/navbar';

export default function NavbarContainer({
  activeSection,
}: {
  activeSection: string;
}): JSX.Element {
  const router = useRouter();
  return (
    <Navbar>
      <Links>
        <ScrollLink href='#home'>Home</ScrollLink>
        <ScrollLink
          href='#about'
          className={activeSection === 'about' ? 'active' : ''}
        >
          About
        </ScrollLink>
        <ScrollLink
          href='#projects'
          className={activeSection === 'projects' ? 'active' : ''}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          href='#contact'
          className={activeSection === 'contact' ? 'active' : ''}
        >
          Contact
        </ScrollLink>
      </Links>
    </Navbar>
  );
}
