import React from 'react';

import styles from "./index.module.scss";
interface IProps {
  closeModal?: () => void,
  children: JSX.Element
}

export const Modal: React.FC<IProps> = ({closeModal, children}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.pop} >
        {children}
      </div>  
      <div onClick={closeModal} className={styles.overlay} />
    </div>
  )
}