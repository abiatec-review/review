import { Button } from "components/Atoms"

import styles from "./index.module.scss"

export const AcceptSnack = ({setIsAccepted}:any) => {

  const acceptCookies = (isAccepted: string) => () => {
    localStorage.setItem('isAccepted', isAccepted);
    setIsAccepted('isAccepted')
  }

  return (
    <div className={styles.content}>
      <div>Please, click "Yes" to accept all cookies</div>
      <div> 
        <Button onClick={acceptCookies('accepted')}>Yes</Button>
        <Button onClick={acceptCookies('')}>No</Button>
      </div>
    </div>
  )
}