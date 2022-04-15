import styles from './style.module.scss';
import React from "react";
// @ts-ignore
export const Modal = ({ showModal, children}) => {

    return (
        <div className={styles.modalBlock}>
            <div className={styles.modal}>
                {children}
            </div>
            <div className={styles.modalShadow} onClick={showModal}/>
        </div>
        )
}
