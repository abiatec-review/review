import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signInAC, signUpAC } from "redux/actions/UserActions"
import { getUserError } from "redux/selectors/userSelectors"
import { Button } from "../Button"
import { useCookies } from 'react-cookie';

import styles from './index.module.scss'

type callbackType = (loginField: string, passwordField: string) => any

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch()
  const error = useSelector(getUserError)
  const [loginField, setLogin] = useState('')
  const [passwordField, setPassword] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  const [name, setName] = useState('')
  const clickButton = (clb: callbackType) => () =>{ 
    if (name) {
      setCookie('name', name)
    }
    dispatch(clb)
  }  
  const isAccept = localStorage.getItem('isAccepted')
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>Please, log in app</div>
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
      <Button className={styles.button} onClick={clickButton(signInAC(loginField, passwordField))}>Sign in</Button>
      <Button className={styles.button} onClick={clickButton(signUpAC(loginField, passwordField))}>Sign Up</Button>
      {error && <div className={styles.error}>{error}</div>}
      {isAccept &&
        <label className={styles.label}>
        Please, enter name
        <input className={styles.input} value={name} onChange={(e) => {
            setName(e.currentTarget.value)}
        } type="password"/>
        </label>
      }
    </div>
  )
}