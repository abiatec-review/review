import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  children: any;
}

const Modal = ({ isActive, setIsActive, children }: ModalProps) => {
  return (
    <div className={isActive ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setIsActive(false)}>
      <div className={isActive ? `${styles.modalContent} ${styles.modalContentActive}` : styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;