import React from "react";

import styles from './styles.module.scss'

import { Button, Input } from '../../atoms'


interface IProps {
  inputValue?: string
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  getCharactersHandler?: (event: React.FormEvent) => void
}

export const SearchBox: React.FC<IProps> = ( {inputValue, onChangeHandler, getCharactersHandler})=> {

  return ( 
    <form className={styles.headerSearchBox}>
      <Input inputValue={inputValue} onChangeHandler={onChangeHandler} name={'name'} placeholder={'Enter the character name'} className={styles.headerInputField}/>
      <Button handleClick={getCharactersHandler}
              className={styles.submitButton}
              type={"submit"}>{'Find'}</Button>
    </form>
  )
} 