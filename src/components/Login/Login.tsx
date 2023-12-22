import React, { useState } from 'react';
import styles from './Login.module.css';
import { ApiError, AuthResponse } from '../../types/types';
import { login } from '../../shared/api';
import { PASSWORD_RESET_URL, SIGNUP_URL } from '../../shared/constants';
import { saveTokensToCookies } from '../../shared/auth';
import InputField from '../InputField/InputField';

const Login: () => React.JSX.Element = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      setMessage('');
      const credentials = { username, password };
      const result: AuthResponse = await login(credentials);
      saveTokensToCookies(result);
    } catch (error: unknown) {
      const errorInfo = error as ApiError;
      setMessage(errorInfo.message);
    }
  };

  const Header = (): React.JSX.Element => (
    <header className={styles.header}>
      <img src='/images/logo.png' alt='Logo' className={styles.logo} />
    </header>
  );

  const errorMessageComponent = message && (
    <div data-testid='error-message' className={styles.errorLabel}>
      {message}
    </div>
  );

  const LinkSection = (): React.JSX.Element => (
    <div className={styles.linksContainer}>
      <a href={PASSWORD_RESET_URL} className={styles.forgotPasswordLink}>
        Forgot Password?
      </a>
      <a href={SIGNUP_URL} className={styles.signUpLink}>
        Sign Up
      </a>
    </div>
  );

  return (
    <div className={styles.container}>
      <Header />
      <form
        data-testid='login-form'
        className={styles.loginForm}
        onSubmit={handleLogin}
      >
        <InputField
          labelFor='email'
          labelText='Email address'
          type='email'
          id='email'
          value={username}
          placeholder='Email'
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          labelFor='password'
          labelText='Password'
          type='password'
          id='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessageComponent}
        <button type='submit' className={styles.loginButton}>
          Login
        </button>
        <LinkSection />
      </form>
    </div>
  );
};

export default Login;
