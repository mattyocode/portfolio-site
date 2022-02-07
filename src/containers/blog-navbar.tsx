import React from 'react';
import { Links, Navbar, NavbarLink } from '../components/navbar';

export default function BlogNavbarContainer({
  activeSection,
}: {
  activeSection?: string;
}): JSX.Element {
  return (
    <Navbar>
      <Navbar>
        <Links>
          <NavbarLink
            href='/blog'
            scroll={true}
            className={activeSection === 'bloghome' ? 'active' : ''}
          >
            Blog Home
          </NavbarLink>
          <NavbarLink href='/' scroll={false}>
            Portfolio
          </NavbarLink>
        </Links>
      </Navbar>
    </Navbar>
  );
}
