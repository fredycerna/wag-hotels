import React from 'react';
import styles from './Login.module.css';

const Login: () => React.JSX.Element = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src='/images/logo.png' alt='Logo' className={styles.logo} />
      </header>
      <form className={styles.loginForm}>
        <h2 className={styles.loginTitle}>Login</h2>
        <label htmlFor='email' className={styles.inputLabel}>
          Email
        </label>
        <input type='email' id='email' className={styles.input} />
        <label htmlFor='password' className={styles.inputLabel}>
          Password
        </label>
        <input type='password' id='password' className={styles.input} />
        <button type='submit' className={styles.loginButton}>
          Login
        </button>
        <div className={styles.linksContainer}>
          <a
            href='https://www.google.com'
            className={styles.forgotPasswordLink}
          >
            Forgot Password?
          </a>
          <a href='https://www.google.com' className={styles.signUpLink}>
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
