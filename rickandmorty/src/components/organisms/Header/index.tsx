import { SearchInput } from "components/molecules"
import { Image } from "components/atoms"
import styles from './style.module.scss';
import React from "react";

interface IProps{
    inputRef: React.RefObject<HTMLInputElement>
}

export const Header:React.FC<IProps> = ({inputRef}) => {
    return (
        <header className={styles.Header}>
            <Image type={'list'} className={styles.Header_logo}/>
            <SearchInput inputRef={inputRef}/>
        </header>
    )
}
