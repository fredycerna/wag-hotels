import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import * as apiModule from '../../shared/api';
jest.mock('../../shared/api', () => ({
  login: jest.fn(),
}));

describe('Login Component', () => {
  it('renders without crashing', () => {
    render(<Login />);
    const emailLabel = screen.getByText('Email address');
    const passwordLabel = screen.getByText('Password');
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  it('handles login successfully', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mockLogin = require('../../shared/api').login;
    mockLogin.mockResolvedValueOnce({ access: 'token' });

    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });

    fireEvent.submit(screen.getByTestId('login-form'));

    await waitFor(() => {});

    expect(screen.queryByTestId('error-message')).toBeNull();
  });

  it('handles login failure', async () => {
    // Spy on the login function to throw an error
    const loginSpy = jest.spyOn(apiModule, 'login');
    loginSpy.mockImplementation(() => {
      throw new Error('Invalid credentials');
    });

    render(<Login />);

    // Set username and password
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'wrongpassword' },
    });

    // Submit the form
    fireEvent.submit(screen.getByTestId('login-form'));

    // Wait for the asynchronous login function to throw an error
    await waitFor(() => {});

    // Assert that the error message is displayed
    expect(screen.getByTestId('error-message')).toHaveTextContent(
      'Invalid credentials',
    );

    // Restore the original implementation
    loginSpy.mockRestore();
  });
});
