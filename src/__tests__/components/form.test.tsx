import React from 'react';
import {
  act,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import ContactForm from '../../components/form';

describe('<ContactForm /> tests', () => {
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
    const promise = Promise.resolve();
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

  test('submit button disabled when fields incomplete', async () => {
    const submitMock = jest.fn();
    render(<ContactForm submitFn={submitMock} />);

    act(() => {
      userEvent.type(screen.getByLabelText(/name/i), 'Matt');
      userEvent.type(screen.getByLabelText(/email/i), 'hi@test.com');
    });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /send/i })).toHaveAttribute(
        'disabled'
      );
    });
  });
});
