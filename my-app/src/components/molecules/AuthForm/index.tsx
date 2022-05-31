import React from "react";

import styles from './styles.module.scss'
import {TitleText, Input, Button} from "../../atoms";

interface IProps {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleClick: (event: React.FormEvent) => void
    placeholder: {email: string, password: string}
    credentials: {name: string, password: string}
    titleText: string
    values: {email: string, password: string}
    buttonText: string
}
  
  export const AuthForm: React.FC<IProps> = ( {onChangeHandler, handleClick, placeholder, credentials, titleText, values, buttonText } )=> {
    
    return (
        <div className={styles.authFormBox}>
            <TitleText titleText={titleText} className={styles.authFormText} />
            <form className={styles.authForm}>
                <Input onChangeHandler={onChangeHandler}
                       className={styles.authInput}
                       name={credentials.name}
                       placeholder={placeholder.email}
                       inputValue={values.email}
                       />
                <Input onChangeHandler={onChangeHandler}
                       className={styles.authInput}
                       name={credentials.password}
                       placeholder={placeholder.password}
                       inputValue={values.password}
                       />
                <Button handleClick={handleClick} className={styles.authFormButton} type={"submit"}>{buttonText}</Button>
            </form>
        </div>
    )
} 