import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LOAD_ANY_ERROR, signInAC, signUpAC } from "redux/actions/UserActions"
import { getUserError } from "redux/selectors/userSelectors"
import { Button } from "../Button"
import { useCookies } from 'react-cookie';

import styles from './index.module.scss'
import { cookiesName } from "utils/constants"

type callbackType = (loginField: string, passwordField: string) => any

interface IProps {
  isSignIn: boolean;
  setIsSignIn: (isSignIn: boolean) => void;
}

export const LoginForm: React.FC<IProps> = ({isSignIn, setIsSignIn}) => {
  const dispatch = useDispatch()
  const error = useSelector(getUserError)
  const [loginField, setLogin] = useState('')
  const [passwordField, setPassword] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies([cookiesName]);
  
  
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState('')

  const clickButton = (clb: callbackType) => () =>{ 
    if (name && surname && age) {
      setCookie(cookiesName, {name, surname, age})
    }
    dispatch(clb)
  }  
  const isAccept = localStorage.getItem('isAccepted')
  
  const changeTabs = (isSignIn: boolean) => () => {
    setIsSignIn(isSignIn);
    dispatch({
      type: LOAD_ANY_ERROR,
      payload: ''
    })
  }

  const fieldForCookiesElement = <>
    <label className={styles.label}>
        Please, enter name
        <input className={styles.input} value={name} onChange={(e) => {
            setName(e.currentTarget.value)}
        }/>
        </label>
        <label className={styles.label}>
        Please, enter surname
        <input className={styles.input} value={surname} onChange={(e) => {
            setSurname(e.currentTarget.value)}
        }/>
        </label>
        <label className={styles.label}>
        Please, enter age
        <input className={styles.input} value={age} onChange={(e) => {
            setAge(e.currentTarget.value)}
        }/>
        </label>
  </>
  const defaultFields = <>
    <label className={styles.label}>
        Please, enter email
        <input className={styles.input}  value={loginField} onChange={(e) => {
              setLogin(e.currentTarget.value)}
        }/>
      </label>
      
      <label className={styles.label}>
        Please, enter password
        <input className={styles.input} value={passwordField} onChange={(e) => {
            setPassword(e.currentTarget.value)}
        } type="password"/>
        </label>
  </>

  return (
    <div className={styles.container}>
      <div className={styles.header}>{isSignIn ? 'Please, log in app': 'Please, register'}</div>
      {defaultFields}
      {isAccept && !isSignIn && fieldForCookiesElement}
      {isSignIn ? <Button className={styles.button} onClick={clickButton(signInAC(loginField, passwordField))}>Sign in</Button>
      : <Button className={styles.button} onClick={clickButton(signUpAC(loginField, passwordField))}>Sign Up</Button>}
      {error && <div className={styles.error}>{error}</div>}
      {isSignIn ? <div className={styles.link} onClick={changeTabs(false)}>Go to sign up</div>: 
      <div className={styles.link} onClick={changeTabs(true)}>Back to sign in</div>}
    </div>
  )
}