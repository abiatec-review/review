/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { SetStateAction, useState } from 'react';
import { auth } from '../../../../firebase';
import styles from './SignUp.module.scss';

const SignUp = (props: { setIsModalVisible: React.Dispatch<SetStateAction<boolean>> }) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const { setIsModalVisible } = props;

  const register = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
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
          onChange={(evt) => setRegisterEmail(evt.target.value)}
          value={registerEmail}
          id="email"
          className={styles.formField}
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(evt) => setRegisterPassword(evt.target.value)}
          value={registerPassword}
          id="password"
          className={styles.formField}
          type="password"
          placeholder="Password"
          name="password"
        />
        <button className={styles.formField} onClick={(e) => register(e)}>
          Register
        </button>
        {isError && (
          <span className={styles.error}>Login or password are invalid</span>
        )}
      </div>
    </form>
  );
};

export default SignUp;