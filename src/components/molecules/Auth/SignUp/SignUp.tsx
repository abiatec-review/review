/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { SetStateAction, useState } from 'react';
import { auth } from '../../../../firebase';
import styles from './SignUp.module.scss';

const SignUp = (props: { modalControl: React.Dispatch<SetStateAction<boolean>> }) => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const { modalControl } = props;

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
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
          onChange={(evt) => setRegisterEmail(evt.target.value)}
          id="email"
          className={styles.formField}
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(evt) => setRegisterPassword(evt.target.value)}
          id="password"
          className={styles.formField}
          type="password"
          placeholder="Password"
          name="password"
        />
        <button className={styles.formField} onClick={register}>
          Register
        </button>
        {isError && (
          <span className={styles.error}>Login or password are invalid</span>
        )}
      </div>
    </div>
  );
};

export default SignUp;