import React from "react";

import styles from './styles.module.scss'
import {TitleText} from "../../atoms/TitleText";
import {Link} from "react-router-dom";
import {Input} from "../../atoms/Input";
import {Button} from "../../atoms/Button";

interface IProps {
    onChangeHandler: any
    handleClick: any
    placeholder?: any
    name?: any
    titleText: string
    values: any
    buttonName: string
}
  
  export const AuthForm: React.FC<IProps> = ( {onChangeHandler, handleClick, placeholder, name, titleText, values, buttonName } )=> {
    
    return (
        <div className={styles.authFormBox}>
            <TitleText titleText={titleText} className={styles.authFormText} />
            <form className={styles.authForm}>
                <Input onChangeHandler={onChangeHandler}
                       name={name.firstField}
                       placeholder={placeholder.firstField}
                       inputValue={values.firstField}
                       />
                <Input onChangeHandler={onChangeHandler}
                       name={name.secondField}
                       placeholder={placeholder.secondField}
                       inputValue={values.secondField}
                       />
                <Button handleClick={handleClick} className={styles.authFormButton} type={'submit'} buttonName={buttonName}/>
            </form>
        </div>
    )
} 