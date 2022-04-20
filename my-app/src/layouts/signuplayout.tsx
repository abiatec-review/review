import React from "react";

import { Footer } from "components/organisms/Footer";
import {TitleText} from "../components/atoms/TitleText";
import styles from './styles.module.scss'
import {AuthForm} from "../components/molecules/AuthForm";
import {Link, useNavigate} from "react-router-dom";
import {Header} from "../components/organisms/Header";

export const SignUplayout: React.FC = () => {
    const [values, setValues] = React.useState<any>({
        firstField: '',
        secondField: ''
    })
    const navigate = useNavigate();

    const onChange = (event: any) => {
        const {name, value} = event.target;

        setValues((v: any) => ({
            ...v,
            [name]: value,
        }))
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if(!values.firstField || !values.secondField) {
            return;
        }
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
                      titleText={'Sign Up'}
                      values={values}
                      buttonName={'Become a new variation of reality'}/>
            <Link to={'/signin'} target={'_self'}>Already registered? Let's Sign in</Link>
            <Footer />
        </div>
    )
}