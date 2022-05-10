import React, { FC, useMemo, useState } from 'react';

import { useAuth } from '../../../auth/AuthContext';
import { signInErrors, signUpErrors } from '../../../auth/errors';
import { Button, Input, Label } from '../../atoms';
import { AutFormProps } from './type';

const styles = {
  inputWrapperStyle: 'flex flex-col mb-2',
  formStyle: 'flex flex-col items-center',
  errorStyle: 'text-error-color mb-2',
};

const isDisabledButton = (type: string, email: string, password: string, confirmPassword: string) => {
  switch (type) {
    case 'signIn': {
      return email.trim() === '' || password.trim() === '';
    }
    case 'signUp': {
      return email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || password !== confirmPassword;
    }
  }
};

const AuthForm: FC<AutFormProps> = ({ type }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const auth = useAuth();

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const confirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

  const submitHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    switch (type) {
      case 'signIn': {
        const res = await auth?.signIn(email, password);
        if (res.hasOwnProperty('error')) {
          setError(signInErrors(res.error));
        } else {
          setError('');
          setEmail('');
          setPassword('');
        }
        break;
      }
      case 'signUp': {
        const res = await auth?.signUp(email, password);
        if (res.hasOwnProperty('error')) {
          setError(signUpErrors(res.error));
        } else {
          setError('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        }
        break;
      }
    }
  };

  const fields = useMemo(() => {
    switch (type) {
      case 'signIn': {
        return [
          {
            type: 'text', label: 'Email', placeHolder: 'test@test.com', value: email, changeHandler: emailHandler,
          },
          {
            type: 'password', label: 'Password', placeHolder: '******', value: password, changeHandler: passwordHandler,
          },
        ];
      }
      case 'signUp': {
        return [
          {
            type: 'text', label: 'Email', placeHolder: 'test@test.com', value: email, changeHandler: emailHandler,
          },
          {
            type: 'password', label: 'Password', placeHolder: '******', value: password, changeHandler: passwordHandler,
          },
          {
            type: 'password', label: 'Confirm Password', placeHolder: '******', value: confirmPassword, changeHandler: confirmPasswordHandler,
          },
        ];
      }
    }
  }, [email, password, confirmPassword, type]);

  return (
    <form className={styles.formStyle}>
      {fields?.map((item) => (
        <div key={item.label} className={styles.inputWrapperStyle}>
          <Label label={item.label} />
          <Input
            value={item.value}
            changeHandler={item.changeHandler}
            placeholder={item.placeHolder}
            type={item.type}
          />
        </div>
      ))}
      {error.trim() && <h2 className={styles.errorStyle}>{error}</h2>}
      <Button
        title="Submit"
        clickHandler={submitHandler}
        isDisabled={isDisabledButton(type, email, password, confirmPassword)}
      />
    </form>
  );
};

export default AuthForm;
