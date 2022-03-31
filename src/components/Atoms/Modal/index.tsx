import React from 'react';
import './index.css'
interface IProps {
  closeModal?: () => void,
  children: JSX.Element
}

const Modal: React.FC<IProps> = ({closeModal, children}) => {
  return (
    <div className="modal">
      <div className="modal-pop" >
        {children}
      </div>  
      <div onClick={closeModal} className="modal-overlay"></div>    
    </div>
  )
}

export default Modal