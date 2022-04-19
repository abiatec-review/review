import React from 'react'

import styles from './styles.module.scss'

interface IProps {
  inputValue: string
  onChangeHandler: any
  name: string
  placeholder: string
}

export const Input: React.FC<IProps> = ( { inputValue, onChangeHandler, name, placeholder } ) => {

  return ( 
    <input className={styles.headerInputField}
            value={inputValue}
            onChange={onChangeHandler}
            name={name}
            placeholder={placeholder}
            >
    </input>
  )
}