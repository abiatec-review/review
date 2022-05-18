import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {signInAuth, signUpAuth} from "redux/actions";

import {Modal} from "components/molecules";

import {regEmail} from "utils/constants";

import styles from './style.module.scss';


interface IProps {
  onClose: () => void,
  setEmailHeader: (arg: string) => void,
  setLogIn: (arg: boolean) => void
}

export const Authentication:React.FC<IProps> = ({onClose, setEmailHeader, setLogIn}) => {

  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
  })

  const [nameError, setNameError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [surnameError, setSurnameError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [identError, setIdentError] = useState<string>('')

  const [signInVisible, setSignInVisible] = useState<boolean>(false)

  const dispatch = useDispatch()

  const logIn = () => {
    setEmailHeader(user.email)
    onClose()
    setLogIn(true)
  }

  const signUp = () => {
    dispatch(signUpAuth({email: user.email, password: user.password, name: user.name, surname: user.surname, login: true}))
    logIn()
  }

  const signIn = () => {
    dispatch(signInAuth({email: user.email}))
    logIn()
    setIdentError('')
  }

  const signInUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(signInVisible) {
      if (user.email !== '' && user.password !== '' && user.name !== '' && user.surname !== '' && emailError === '') {
        signUp()
      }
    } else {
      if(user.email === JSON.parse(localStorage.getItem(user.email)!)?.email && user.password === JSON.parse(localStorage.getItem(user.email)!)?.password) {
        signIn()
      } else {
        setIdentError('There is no user record corresponding to this identifier.')
      }
    }
  }

  const turnUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSignInVisible(prev => !prev)
    setIdentError('')
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => ({...prev, email:e.target.value}));
    if(!e.target.value) {
      setEmailError( `Please enter the email`)
    } else {
      if(regEmail.test(String(e.target.value).toLowerCase())) {
        setEmailError('')
      } else {
        setEmailError(`Please enter valid email`);}
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, changeField: any) => {
    setUser(prev => ({...prev, [field]:e.target.value}));
    if(!e.target.value) {
      changeField( `Please enter the ${field}`)
    } else {
      changeField('');
    }
  }


  return (
    <Modal showModal={onClose}>
      <form className={styles.authenticationCont}>
        <h2 className={styles.title}>{signInVisible ? 'Please register' : 'Please Log in'}</h2>
        <div className={styles.inputCont}>
          <div className={styles.error}>{emailError}</div>
          <div>
            <input className={styles.input} type="text" value={user.email} placeholder="Your email"
              onChange={(e) => onChangeEmail(e)}/>
          </div>
        </div>
        <div className={styles.inputCont}>
          <div className={styles.error}>{passwordError}</div>
          <div>
            <input className={styles.input} type="password" value={user.password} placeholder="Your password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e, 'password', setPasswordError)}}/>
          </div>
        </div>
        {signInVisible &&
                    <>
                      <div className={styles.inputCont}>
                        <div className={styles.error}>{nameError}</div>
                        <div>
                          <input className={styles.input} type="text" value={user.name} placeholder="Your name"
                            onChange={(e) => {onChange(e, 'name', setNameError)}}/>
                        </div>
                      </div>
                      <div className={styles.inputCont}>
                        <div className={styles.error}>{surnameError}</div>
                        <div>
                          <input className={styles.input} type="text" value={user.surname} placeholder="Your surname"
                            onChange={(e) => {onChange(e, 'surname', setSurnameError)}}/>
                        </div>
                      </div>
                    </>
        }
        <button className={styles.signInButton} onClick={signInUp}>{signInVisible ? 'Sign Up': 'Sign In'}</button>
        <div className={styles.error}>{identError}</div>
        <button className={styles.signUpButton} onClick={turnUp}>{signInVisible ? 'Back to Sign In': 'Go to Sign Up'}</button>
      </form>
    </Modal>
  )
}
