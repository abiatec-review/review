import React from "react";

import styles from './styles.module.scss'
import {TitleText} from "../../atoms/TitleText";
import {Input} from "../../atoms/Input";
import {Button} from "../../atoms/Button";

interface IProps {
    onChangeHandler: any
    handleClick: any
    placeholder?: any
    name?: any
    titleText: string
    values: any
    buttonText: string
}
  
  export const AuthForm: React.FC<IProps> = ( {onChangeHandler, handleClick, placeholder, name, titleText, values, buttonText } )=> {
    
    return (
        <div className={styles.authFormBox}>
            <TitleText titleText={titleText} className={styles.authFormText} />
            <form className={styles.authForm}>
                <Input onChangeHandler={onChangeHandler}
                       className={styles.authInput}
                       name={name.firstField}
                       placeholder={placeholder.firstField}
                       inputValue={values.firstField}
                       />
                <Input onChangeHandler={onChangeHandler}
                       className={styles.authInput}
                       name={name.secondField}
                       placeholder={placeholder.secondField}
                       inputValue={values.secondField}
                       />
                <Button handleClick={handleClick} className={styles.authFormButton} type={'submit'} buttonText={buttonText}/>
            </form>
        </div>
    )
} 