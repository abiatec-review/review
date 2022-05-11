/* eslint-disable @typescript-eslint/no-unused-vars */
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { SetStateAction, useState } from 'react';
import { auth } from '../../../../firebase';
import styles from './SignIn.module.scss';

const SignIn = (props: { setIsModalVisible: React.Dispatch<SetStateAction<boolean>> }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const { setIsModalVisible } = props;

  const login = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      setIsModalVisible(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <form className={styles.formContainer}>
      <div className={styles.registerForm}>
        <input
          onChange={(evt) => setLoginEmail(evt.target.value)}
          value={loginEmail}
          id="email"
          className={styles.formField}
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(evt) => setLoginPassword(evt.target.value)}
          value={loginPassword}
          id="password"
          className={styles.formField}
          type="password"
          placeholder="Password"
          name="password"
        />
        <button className={styles.formField} onClick={(e) => login(e)}>
          Login
        </button>
        {isError && (
          <span className={styles.error}>Login or password are invalid</span>
        )}
      </div>
    </form>
  );
};

export default SignIn;