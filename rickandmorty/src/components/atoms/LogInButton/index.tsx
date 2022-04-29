import React from "react";
import styles from './style.module.scss';

interface IProps {
    toggleVisible: () => void,
    logIn: boolean,
    emailHeader: string
}

export const LogInButton: React.FC<IProps> = ({toggleVisible, logIn, emailHeader}) => {

    return (
        <div className={styles.authenticationButtonCont}>
            <div className={styles.email}>{emailHeader}</div>
            <button className={styles.authenticationButton} onClick={toggleVisible}>{logIn ? 'Log Out' : 'Log In'}</button>
        </div>
    )
}
