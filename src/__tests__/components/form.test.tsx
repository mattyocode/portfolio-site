import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import ContactForm from '../../components/form';

describe('<ContactForm /> tests', () => {
  function setup() {
    const submitMock = jest.fn();
    const utils = render(<ContactForm submitFn={submitMock} />);
    const user = { name: 'Matt', email: 'hi@test.com', message: 'Hello!' };
    const changeNameInput = (value: string) =>
      userEvent.type(utils.getByLabelText(/name/i), value);
    const changeEmailInput = (value: string) =>
      userEvent.type(utils.getByLabelText(/email/i), value);
    const changeMessageInput = (value: string) =>
      userEvent.type(utils.getByLabelText(/message/i), value);
    const clickSubmit = () =>
      userEvent.click(utils.getByRole('button', { name: /send/i }));
    return {
      ...utils,
      submitMock,
      user,
      changeNameInput,
      changeEmailInput,
      changeMessageInput,
      clickSubmit,
    };
  }

  test('renders blank <ContactForm />', () => {
    const utils = setup();
    const contactForm = screen.getByTestId(/contact-form/i);
    expect(contactForm).toHaveFormValues({
      name: '',
      email: '',
      message: '',
    });
  });

  test('submits with name, email, and message', async () => {
    const utils = setup();
    utils.changeNameInput(utils.user.name);
    utils.changeEmailInput(utils.user.email);
    utils.changeMessageInput(utils.user.message);
    utils.clickSubmit();

    await waitFor(() => {
      expect(utils.submitMock).toHaveBeenCalledWith({
        name: 'Matt',
        email: 'hi@test.com',
        message: 'Hello!',
      });
    });
  });

  test('submit button disabled when fields incomplete', async () => {
    const utils = setup();

    act(() => {
      utils.changeNameInput(utils.user.name);
      utils.changeEmailInput(utils.user.email);
    });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /send/i })).toHaveAttribute(
        'disabled'
      );
    });
  });

  test('shows error message on blur if name field unfilled', async () => {
    const utils = setup();

    act(() => {
      screen.getByLabelText(/name/i).focus();
      screen.getByLabelText(/email/i).focus();
    });

    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    });
  });

  test('shows error message on blur if email field unfilled', async () => {
    const utils = setup();

    act(() => {
      screen.getByLabelText(/email/i).focus();
      screen.getByLabelText(/name/i).focus();
    });

    await waitFor(() => {
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    });
  });

  test('shows error message on blur if message field unfilled', async () => {
    const utils = setup();

    act(() => {
      screen.getByLabelText(/message/i).focus();
      screen.getByLabelText(/name/i).focus();
    });

    await waitFor(() => {
      expect(screen.getByText(/please include a message/i)).toBeInTheDocument();
    });
  });
});
