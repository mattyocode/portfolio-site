import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { server, rest } from '../../mocks/server';

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

  test('displays success message when details sent', async () => {
    render(<ContactSection navRef={mockRef} />);
    // const user = { name: 'Matt', email: 'hi@test.com', message: 'Hello!' };

    userEvent.type(screen.getByLabelText(/name/i), 'matt');
    userEvent.type(screen.getByLabelText(/email/i), 'hi@test.com');
    userEvent.type(screen.getByLabelText(/message/i), 'Hello!');

    userEvent.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(screen.getByText(/sent/i)).toBeInTheDocument();
    });
  });

  test('displays try again message on server error', async () => {
    cleanup();
    server.use(
      rest.post('/api/sendgrid/', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Server error' }));
      })
    );
    render(<ContactSection navRef={mockRef} />);

    userEvent.type(screen.getByLabelText(/name/i), 'matt');
    userEvent.type(screen.getByLabelText(/email/i), 'hi@test.com');
    userEvent.type(screen.getByLabelText(/message/i), 'Hello!');

    userEvent.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(screen.getByText(/try again/i)).toBeInTheDocument();
    });
  });

  test('displays sending... while message is sending', async () => {
    cleanup();
    server.use(
      rest.post('/api/sendgrid/', (req, res, ctx) => {
        setTimeout(() => {}, 1000);
        return res(ctx.status(500), ctx.json({ error: 'Server error' }));
      })
    );
    render(<ContactSection navRef={mockRef} />);

    userEvent.type(screen.getByLabelText(/name/i), 'matt');
    userEvent.type(screen.getByLabelText(/email/i), 'hi@test.com');
    userEvent.type(screen.getByLabelText(/message/i), 'Hello!');

    userEvent.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
    });
  });
});
