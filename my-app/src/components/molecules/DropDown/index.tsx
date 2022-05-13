import styles from './styles.module.scss'
import React from "react";

interface IProps {
    children?: JSX.Element
    onClose: () => void
}

export const DropDown: React.FC<IProps> = ({children, onClose}) => {

    const overlayClick = (event: any) => {
        if (event.target.classList.contains(styles.dropDown))
            onClose();

    }

    return (
        <div className={styles.dropDown} onClick={overlayClick}>
            {children}
        </div>
    )
}