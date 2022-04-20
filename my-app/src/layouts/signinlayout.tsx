import React from "react";

import { Footer } from "components/organisms/Footer";
import {TitleText} from "../components/atoms/TitleText";
import styles from './styles.module.scss'
import {AuthForm} from "../components/molecules/AuthForm";
import {useNavigate} from "react-router-dom";
import {Header} from "../components/organisms/Header";

export const SignInlayout: React.FC = () => {
    const [values, setValues] = React.useState<any>({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const onChange = (event: any) => {
        const {name, value} = event.target;

        setValues((v: any) => ({
            ...v,
            [name]: value,
        }))
        console.log(values)
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if(!values.email || !values.password) {
            return;
        }

        console.log(values)
    }

    const toSignUpButton = () => {
        navigate('/signup')
    }

    return (
        <div className={styles.signInBox}>
            <Header>
                <TitleText className={styles.title} titleText={'Rick and Morty sandbox'}/>
            </Header>
            <AuthForm onChangeHandler={onChange}
                      handleClick={handleSubmit}
                      placeholder={{firstField: 'your eMail', secondField: 'your password'}}
                      name={{firstField: 'email', secondField: 'password'}}
                      titleText={'Sign In'}
                      values={values}
            buttonName={'Start the adventure for 20 min'}/>
            <Footer />
        </div>
    )
}