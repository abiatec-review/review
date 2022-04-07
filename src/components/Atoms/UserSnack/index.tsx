import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { cookiesName } from 'utils/constants';
import { Button } from '../Button';
import styles from './styles.module.scss'

interface IUser {
  age: string;
  surname: string;
  name: string;
}
interface IProps {
  user: IUser,
  setCookie: any;
  setIsUserSlackOpen: (flag: boolean) => void;
}

export const UserSnack: React.FC<IProps>= ({user, setCookie, setIsUserSlackOpen}) => {

  const [isNameChange, setIsNameChange] = useState(false)
  const [isSurnameChange, setIsSurnameChange] = useState(false)
  const [isAgeChange, setIsAgeChange] = useState(false)

  const [name, setName] = useState(user.name)
  const [surname, setSurname] = useState(user.surname)
  const [age, setAge] = useState(user.age)

  const changeOnBlur = (callback: any) => () => {
    setCookie(cookiesName, {name, surname, age});
    callback(false)
  }

  return (
    <div className={styles.block}>
      <div className={styles.ButtonBlock}>
        <Button className={styles.button} onClick={() => setIsUserSlackOpen(false)}>Close</Button>
      </div>
      {isNameChange ? 
        <input autoFocus className={styles.input} value={name} onBlur={changeOnBlur(setIsNameChange)} onChange={(e) => {
          setName(e.currentTarget.value)}
        } />
      : <div onClick={() => setIsNameChange(true)} className={styles.field}>{name}</div>}
      {isSurnameChange ? 
        <input autoFocus className={styles.input} value={surname} onBlur={changeOnBlur(setIsSurnameChange)} onChange={(e) => {
          setSurname(e.currentTarget.value)}
        } />
      : <div onClick={() => setIsSurnameChange(true)} className={styles.field}>{surname}</div>}
      {isAgeChange ? 
        <input autoFocus className={styles.input} value={age} onBlur={changeOnBlur(setIsAgeChange)} onChange={(e) => {
          setAge(e.currentTarget.value)}
        } />
      : <div onClick={() => setIsAgeChange(true)} className={styles.field}>Age is {age}</div>}
    </div>
  )
}
