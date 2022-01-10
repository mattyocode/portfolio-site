import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import ContactForm from '../../components/form';

describe('<ContactForm /> tests', () => {
  // beforeEach(() => {
  //   const submitMock = jest.fn();
  //   render(<ContactForm submitFn={submitMock} />);
  // });

  test('renders blank <ContactForm />', () => {
    const submitMock = jest.fn();
    render(<ContactForm submitFn={submitMock} />);
    const contactForm = screen.getByTestId(/contact-form/i);
    expect(contactForm).toHaveFormValues({
      name: '',
      email: '',
      message: '',
    });
  });

  test('submits with name, email, and message', async () => {
    const submitMock = jest.fn();
    render(<ContactForm submitFn={submitMock} />);

    userEvent.type(screen.getByLabelText(/name/i), 'Matt');
    userEvent.type(screen.getByLabelText(/email/i), 'hi@test.com');
    userEvent.type(screen.getByLabelText(/message/i), 'Hello!');

    userEvent.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(submitMock).toHaveBeenCalledWith({
        name: 'Matt',
        email: 'hi@test.com',
        message: 'Hello!',
      });
    });
  });
});
