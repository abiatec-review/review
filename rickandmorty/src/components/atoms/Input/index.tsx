import React, {RefObject} from 'react';

import styles from './style.module.scss';

interface IProps {
    inputRef: RefObject<HTMLInputElement>
}

export const Input:React.FC<IProps> = ({inputRef}) => {

    return (
        <input ref={inputRef} className={styles.input}/>
    )
}
