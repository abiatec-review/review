import React, { useState } from "react"

import { LoginForm, Modal } from "components/Atoms"

interface IProps {
  closeModal: () => void
}

const ModalSignIn: React.FC<IProps>= ({closeModal}) => {
  const [isSignIn, setIsSignIn] = useState(true)
  
  return (
    <Modal closeModal={closeModal}>
      <LoginForm isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>
    </Modal>
  )
}

export default ModalSignIn