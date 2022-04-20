import React from 'react'

import styles from './styles.module.scss'

interface IProps {
  inputValue?: string
  onChangeHandler: any
  name: string
  placeholder: string
  rest?: any
}

export const Input: React.FC<IProps> & React.HTMLProps<HTMLInputElement> = ( { inputValue, onChangeHandler, name, placeholder, ...rest } ) => {

  return ( 
    <input className={styles.headerInputField}
            value={inputValue}
            onChange={onChangeHandler}
            name={name}
            placeholder={placeholder}
            {...rest}>
    </input>
  )
}