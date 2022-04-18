import styles from './style.module.scss';
import React from "react";

interface IProps {
    showModal: () => void;
    children: React.ReactNode
}

export const Modal:React.FC<IProps> = ({ showModal, children}) => {

    return (
        <div className={styles.modalBlock}>
            <div className={styles.modal}>
                {children}
            </div>
            <div className={styles.modalShadow} onClick={showModal}/>
        </div>
        )
}
