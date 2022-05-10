/* eslint-disable @typescript-eslint/no-unused-vars */
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { SetStateAction, useState } from 'react';
import { auth } from '../../../../firebase';
import styles from './SignIn.module.scss';

const SignIn = (props: { modalControl: React.Dispatch<SetStateAction<boolean>> }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const { modalControl } = props;

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      modalControl(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.registerForm}>
        <input
          onChange={(evt) => setLoginEmail(evt.target.value)}
          id="email"
          className={styles.formField}
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(evt) => setLoginPassword(evt.target.value)}
          id="password"
          className={styles.formField}
          type="password"
          placeholder="Password"
          name="password"
        />
        <button className={styles.formField} onClick={login}>
          Login
        </button>
        {isError && (
          <span className={styles.error}>Login or password are invalid</span>
        )}
      </div>
    </div>
  );
};

export default SignIn;