import React from "react";

import { SearchInput } from "components/molecules"
import { Image } from "components/atoms"
import {LogInButton} from "../../atoms/LogInButton";

import {allImages} from "../../atoms/Image";

import styles from './style.module.scss';

interface IProps{
    inputRef: React.RefObject<HTMLInputElement>,
    emailHeader: string,
    logIn: boolean,
    toggleVisible: () => void
}

export const Header:React.FC<IProps> = ({inputRef, emailHeader, logIn, toggleVisible}) => {
    return (
        <header className={styles.Header}>
            <Image type={allImages.LIST} className={styles.Header_logo}/>
            <SearchInput inputRef={inputRef}/>
            <LogInButton toggleVisible={toggleVisible} emailHeader={emailHeader} logIn={logIn}/>
        </header>
    )
}
