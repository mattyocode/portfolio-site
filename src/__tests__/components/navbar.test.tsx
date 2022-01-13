import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Navbar, Links, NavbarLink, ScrollLink } from '../../components/navbar';

describe('<Navbar /> tests', () => {
  test('renders <Navbar />', () => {
    render(
      <Navbar>
        <Links>
          <ScrollLink href='#about'>About</ScrollLink>
        </Links>
      </Navbar>
    );
    expect(screen.getByText(/about/i).closest('a')).toHaveAttribute(
      'href',
      '/#about'
    );
  });
});
