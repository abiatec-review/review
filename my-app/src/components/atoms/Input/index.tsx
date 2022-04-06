import React, { useState } from 'react'
import styles from './styles.module.scss'

interface IProps {
  inputValue: string
  onChangeHandler: any
}

export const Input: React.FC<IProps> = ( { inputValue, onChangeHandler } ) => {

  return ( 
    <input className={styles.headerInputField}
            value={inputValue}
            onChange={onChangeHandler}
            name={'name'}
            placeholder={'Enter the character name'}
            >
    </input>
  )
}