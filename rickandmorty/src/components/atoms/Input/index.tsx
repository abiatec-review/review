import styles from './style.module.scss';
import {RefObject} from "react";

interface IProps{
    inputRef: RefObject<HTMLInputElement>
}


export const Input:React.FC<IProps> = ({inputRef}) => {

    return (
        <input ref={inputRef} className={styles.input}/>
    )
}
