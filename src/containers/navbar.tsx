import React from 'react';
import { useRouter } from 'next/router';
import { Links, Navbar, NavbarLink, ScrollLink } from '../components/navbar';

export default function NavbarContainer({
  activeSection,
}: {
  activeSection: string;
}): JSX.Element {
  const router = useRouter();
  return (
    <Navbar>
      <Links>
        {/* <ScrollLink href='#home' scroll={false}>
          Home
        </ScrollLink> */}
        <ScrollLink
          href='#about'
          className={activeSection === 'about' ? 'active' : ''}
          scroll={false}
        >
          About
        </ScrollLink>
        <ScrollLink
          href='#projects'
          className={activeSection === 'projects' ? 'active' : ''}
          scroll={false}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          href='#contact'
          className={activeSection === 'contact' ? 'active' : ''}
          scroll={false}
        >
          Contact
        </ScrollLink>
        <ScrollLink href='/blog' scroll={false}>
          Blog
        </ScrollLink>
      </Links>
    </Navbar>
  );
}
