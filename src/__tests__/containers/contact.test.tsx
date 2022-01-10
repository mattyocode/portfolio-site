import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContactSection from '../../containers/contact';

describe('<ContactSection />', () => {
  const mockRef = jest.fn();

  test('renders <ContactSection/>', () => {
    render(<ContactSection navRef={mockRef} />);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
    expect(screen.getByTestId(/contact-form/i)).toBeInTheDocument();

    expect(screen.getByAltText(/linkedin link/i)).toBeInTheDocument();
    expect(screen.getByAltText(/github link/i)).toBeInTheDocument();
  });
});
