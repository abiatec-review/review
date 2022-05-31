import styles from './styles.module.scss'
import React from "react";

interface IProps {
    children: JSX.Element
    onClose: () => void
}
  
  export const Modal: React.FC<IProps> = ( {children, onClose} )=> {

    const overlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const tar = event.target as HTMLDivElement
        if (tar.classList.contains(styles.modal))
        onClose();
    }
    
    return ( 
    <div className={styles.modal} onClick={overlayClick}>
        <div>
            {children}
        </div>
    </div>
    )
} 