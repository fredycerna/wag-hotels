import React, { useState } from 'react';
import styles from './Login.module.css';
import { AuthResponse } from '../../types/types';
import { login } from '../../shared/api';
import { PASSWORD_RESET_URL, SIGNUP_URL } from '../../shared/constants';
import { saveTokensToCookies } from '../../shared/auth';

const Login: () => React.JSX.Element = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const credentials = { username, password };
      const result: AuthResponse = await login(credentials);
      saveTokensToCookies(result);
      console.log('Usuario autenticado con éxito', result);
    } catch (error) {
      console.error('Error al autenticar al usuario', error);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src='/images/logo.png' alt='Logo' className={styles.logo} />
      </header>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h2 className={styles.loginTitle}>Login</h2>
        <label htmlFor='email' className={styles.inputLabel}>
          Email
        </label>
        <input
          type='email'
          id='email'
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password' className={styles.inputLabel}>
          Password
        </label>
        <input
          type='password'
          id='password'
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className={styles.loginButton}>
          Login
        </button>
        <div className={styles.linksContainer}>
          <a href={PASSWORD_RESET_URL} className={styles.forgotPasswordLink}>
            Forgot Password?
          </a>
          <a href={SIGNUP_URL} className={styles.signUpLink}>
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
