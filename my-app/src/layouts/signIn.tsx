import React from "react";

import { Footer } from "components/organisms/Footer";
import {TitleText} from "../components/atoms/TitleText";
import styles from './styles.module.scss'
import {AuthForm} from "../components/molecules/AuthForm";
import {Header} from "../components/organisms/Header";
import {useDispatch} from "react-redux";
import {signIn} from "../redux/actions/auth";

export const SignIn: React.FC = () => {

    const dispatch = useDispatch();
    const [values, setValues] = React.useState<any>({
        email: '',
        password: ''
    })

    const onChange = (event: any) => {
        const {name, value} = event.target;

        setValues((v: any) => ({
            ...v,
            [name]: value,
        }))
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if(!values.email || !values.password) {
            return;
        }
        dispatch(signIn(values.email, values.password))
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
                      buttonText={'Start the adventure for 20 min'}/>
            <Footer />
        </div>
    )
}