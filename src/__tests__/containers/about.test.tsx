import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import AboutSection from '../../containers/about';

describe('<AboutSection />', () => {
  const mockRef = jest.fn();

  test('renders <AboutSection/>', () => {
    mockAllIsIntersecting(true);
    render(<AboutSection navRef={mockRef} isActive={true} />);
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
    expect(screen.getByTestId(/about-copy/i)).toBeInTheDocument();
    expect(screen.getByTestId(/skills-icons/i)).toBeInTheDocument();
  });
});
