import { useState } from 'react';

import { Button } from '../Button';

import styles from './styles.module.scss'

class User {
  constructor(
    public age: string,
    public surname: string,
    public name: string,
  ) {}
}
interface IProps {
  user?: User,
  setCookie: any;
  setIsUserSlackOpen: (flag: boolean) => void;
  userMail: string
}

export const UserSnack: React.FC<IProps>= ({userMail, user, setCookie, setIsUserSlackOpen}) => {

  const [isNameChange, setIsNameChange] = useState<boolean>(false)
  const [isSurnameChange, setIsSurnameChange] = useState<boolean>(false)
  const [isAgeChange, setIsAgeChange] = useState<boolean>(false)

  const [name, setName] = useState<string>(user?.name || '')
  const [surname, setSurname] = useState<string>(user?.surname || '')
  const [age, setAge] = useState<string>(user?.age || '')

  const changeOnBlur = (callback: (value: boolean) => void) => () => {
    setCookie(userMail, {name, surname, age});
    callback(false)
  }

  return (
    <div className={styles.block}>
      <div className={styles.ButtonBlock}>
        <Button className={styles.button} onClick={() => setIsUserSlackOpen(false)}>Close</Button>
      </div>
      {isNameChange ? 
        <input 
          autoFocus 
          className={styles.input} 
          value={name} 
          onBlur={changeOnBlur(setIsNameChange)} 
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Name"
        /> : 
        <div onClick={() => setIsNameChange(true)} className={styles.field}>{name ? `Your name is ${name}` : 'Enter your name'}</div>
      }
      {isSurnameChange ? 
        <input 
          autoFocus 
          className={styles.input} 
          value={surname} 
          onBlur={changeOnBlur(setIsSurnameChange)} 
          onChange={(e) => setSurname(e.currentTarget.value)} 
          placeholder="Surname"
        /> : 
        <div onClick={() => setIsSurnameChange(true)} className={styles.field}>{surname ? `Your name is ${surname}` : 'Enter your surname'}</div>
        }
      {isAgeChange ? 
        <input 
          autoFocus 
          className={styles.input} 
          value={age} 
          onBlur={changeOnBlur(setIsAgeChange)} 
          onChange={(e) => setAge(e.currentTarget.value)}
          placeholder="Age"
        /> : 
        <div onClick={() => setIsAgeChange(true)} className={styles.field}>{age ?  `Your age is ${age}` : 'Enter your age'}</div>
      }
    </div>
  )
}
