import { LoginForm, Modal } from "components/Atoms"
import { useState } from "react"

interface IProps {
  closeModal: () => void
}

const ModalSignIn: React.FC<IProps>= ({closeModal}) => {
  
  const [isSignIn, setIsSignIn] = useState(true)
  
  return (
    <Modal closeModal={closeModal}>
      <>
        <LoginForm isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>
      </>
    </Modal>
  )
}

export default ModalSignIn