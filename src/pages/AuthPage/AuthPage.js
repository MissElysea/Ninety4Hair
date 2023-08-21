import React, { useEffect, useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Logo from '../../components/Logo/Logo';

export default function AuthPage({ setUser }) {
  useEffect(() => {
    // Display an alert when the page loads
    alert("Use the promo code MISSELYSEA to get 50% off all items!");

    // Clean up the alert when the component unmounts
    return () => {
      window.alert = alert;
    };
  }, []);

  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div className={styles.formsContainer}>
        <div>
          <Logo />
          <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
        </div>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      </div>
    </main>
  );
}
