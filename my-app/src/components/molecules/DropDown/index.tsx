import styles from './styles.module.scss'
import React from "react";

interface IProps {
    onClose: () => void
}

export const DropDown: React.FC<IProps> = ({children, onClose}) => {

    const overlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const tar = event.target as HTMLDivElement
        if (tar.classList.contains(styles.dropDown))
            onClose();

    }

    return (
        <div className={styles.dropDown} onClick={overlayClick}>
            {children}
        </div>
    )
}