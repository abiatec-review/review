import React, {useEffect} from "react";

import { Footer } from "components/organisms/Footer";
import {TitleText} from "../components/atoms/TitleText";
import styles from './styles.module.scss'
import {AuthForm} from "../components/molecules/AuthForm";
import {Link, useNavigate} from "react-router-dom";
import {Header} from "../components/organisms/Header";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {signUp} from "../redux/actions/auth";
import {routes} from "../utils/constants";

export const SignUp: React.FC = () => {
    const dispatch = useDispatch()
    const {aboutUser} = useSelector((state: RootStateOrAny) => state.auth);

    const [values, setValues] = React.useState<{email: string, password: string}>({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    useEffect(() => {
        if(aboutUser) {
            navigate(`/${routes.SIGNIN}`)
        }
    }, [aboutUser, navigate])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setValues((v: {email: string, password: string}) => ({
            ...v,
            [name]: value,
        }))
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(!values.email || !values.password) {
            return;
        }
        dispatch(signUp(values.email, values.password))
    }

    return (
        <div className={styles.signInBox}>
            <Header>
                <TitleText className={styles.title} titleText={'Rick and Morty sandbox'}/>
            </Header>
            <AuthForm onChangeHandler={onChange}
                      handleClick={handleSubmit}
                      placeholder={{email: 'your eMail', password: 'your password'}}
                      credentials={{name: 'email', password: 'password'}}
                      titleText={'Sign Up'}
                      values={values}
                      buttonText={'Become a new variation of reality'}/>
            <Link className={styles.linkText} to={`/${routes.SIGNIN}`} target={'_self'}>Already registered? Let's Sign in</Link>
            <Footer />
        </div>
    )
}