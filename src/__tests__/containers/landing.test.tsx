import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import LandingSection from '../../containers/landing';
import { SectionNavRef } from '../../types';

describe('<LandingSection />', () => {
  const mockRef = jest.fn();
  beforeEach(() => {
    Object.defineProperty(global, 'ResizeObserver', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        observe: jest.fn(() => 'Mocking works'),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      })),
    });
  });
  test('renders <LandingSection/>', () => {
    render(<LandingSection navRef={mockRef} />);
    expect(screen.getByText(/full stack developer/i)).toBeInTheDocument();
    expect(screen.getByAltText(/linkedin link/i)).toBeInTheDocument();
    expect(screen.getByAltText(/github link/i)).toBeInTheDocument();
  });
});
