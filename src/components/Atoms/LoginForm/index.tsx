import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useCookies } from 'react-cookie';
import classNames from "classnames"

import { LOAD_ANY_ERROR, signInAC, signUpAC } from "redux/actions/UserActions"
import { UserSignCallback } from "redux/actions/UserActions/types";
import { getUserError } from "redux/selectors/userSelectors"

import { Button } from "../Button"

import { isAcceptedCookiesLS, minimalPasswordLength, validationErrorsText } from "utils/constants";

import styles from './index.module.scss'

type callbackType = (loginField: string, passwordField: string) => UserSignCallback
type Callback = (value: string) => void;
interface IProps {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
}

export const LoginForm: React.FC<IProps> = ({isSignIn, setIsSignIn}) => {
  const dispatch = useDispatch()
  const error = useSelector(getUserError)

  const isAccept = localStorage.getItem(isAcceptedCookiesLS)

  const [loginField, setLoginField] = useState<string>('')
  const [passwordField, setPasswordField] = useState<string>('')

  const [, setCookie] = useCookies([loginField]);
  
  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [age, setAge] = useState<string>('')

  const [validEmail, setValidEmail] = useState<string>('');
  const [validPassword, setValidPassword] = useState<string>('');

  const submitForm = (callback: callbackType) => () =>{ 
    if (name || surname || age) {
      setCookie(loginField, {name, surname, age})
    }
    dispatch(callback);
  }  
  
  const changeTabs = (isSignIn: boolean) => () => {
    setIsSignIn(isSignIn);
    dispatch({
      type: LOAD_ANY_ERROR,
      payload: ''
    })
    setPasswordField('')
    setValidPassword('')
  }

  const changeValue = (callback: Callback, callbackValidation?: Callback) => (e: React.FormEvent<HTMLInputElement>) => {
    if(callbackValidation) {
      callbackValidation('')
    }
    callback(e.currentTarget.value);

    if (error) {
      dispatch({
        type: LOAD_ANY_ERROR,
        payload: ''
      })
    }
  } 

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    isSignIn ? submitForm(signInAC(loginField, passwordField)) : submitForm(signUpAC(loginField, passwordField));
    checkEmailValidation();
    checkPasswordValidation()
  }

  const checkEmailValidation = () => {
    if(loginField.match('^(.+)@(.+)$')) {
      setValidEmail('')
    } else {
      loginField === '' ? 
      setValidEmail(validationErrorsText.EMPTY_FIELD) : setValidEmail(validationErrorsText.INVALID_EMAIL);
    }
  }

  const checkPasswordValidation = () => {
    switch (true) {
      case !passwordField: {
        setValidPassword(validationErrorsText.EMPTY_FIELD);
        break;
      }
      case passwordField.length < minimalPasswordLength && !isSignIn: {
        setValidPassword(validationErrorsText.INVALID_PASSWORD);
        break;
      }
      default: setValidPassword('')
    }
  }

  const defaultFields = <>
    <label className={styles.label}>
      <div className={styles.labelContent}>Please, enter email*</div>
      <input 
        className={classNames(styles.input, {[styles.isError]: validEmail})}
        value={loginField} 
        onChange={changeValue(setLoginField, setValidEmail)}
        onBlur={checkEmailValidation}
        placeholder="Your email"
      />
      {validEmail && <div className={styles.inputError}>{validEmail}</div>}
    </label>
    <label className={styles.label}>
      <div className={styles.labelContent}>Please, enter password*</div>
      <input 
        className={classNames(styles.input, {[styles.isError]: validPassword})} 
        value={passwordField} 
        onChange={changeValue(setPasswordField, setValidPassword)} 
        onBlur={checkPasswordValidation} 
        placeholder="Your password"
        type="password"
      />
      {validPassword && <div className={styles.inputError}>{validPassword}</div>}
    </label>
  </>

  const fieldForCookiesElement = <>
    <label className={styles.label}>
      <div className={styles.labelContent}> Please, enter name</div>
      <input 
        className={styles.input} 
        value={name} 
        onChange={changeValue(setName)}
        placeholder="Your name"
      />
    </label>
    <label className={styles.label}>
      <div className={styles.labelContent}>Please, enter surname</div>
      <input 
        className={styles.input} 
        value={surname} 
        onChange={changeValue(setSurname)}
        placeholder="Your surname"
      />
    </label>
    <label className={styles.label}>
      <div className={styles.labelContent}>Please, enter age</div>
      <input 
        className={styles.input} 
        value={age} 
        onChange={changeValue(setAge)}
        placeholder="Your age"
      />
    </label>
  </>
  
  const signButton = isSignIn ? 
    <Button className={styles.button} onClick={submitForm(signInAC(loginField, passwordField))}>Sign in</Button>
    : <Button className={styles.button} onClick={submitForm(signUpAC(loginField, passwordField))}>Sign Up</Button>

  return (
    <div className={styles.container}>
      <div className={styles.header}>{isSignIn ? 'Please, log in app': 'Please, register'}</div>
      <form onSubmit={onSubmitForm} className={styles.form}>
        {defaultFields}
        {isAccept && !isSignIn && fieldForCookiesElement}
        {signButton}
      </form>
      {error && <div className={styles.error}>{error}</div>}
      {isSignIn ? <div className={styles.link} onClick={changeTabs(false)}>Go to sign up</div>: 
      <div className={styles.link} onClick={changeTabs(true)}>Back to sign in</div>}
    </div>
  )
}