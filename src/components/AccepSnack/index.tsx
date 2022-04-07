import { Button } from "components/Atoms"

import styles from "./index.module.scss"

export const AccepSnack = ({setIsAccepted}:any) => {

  const acceptCookies = (isAccepted: string) => () => {
    localStorage.setItem('isAccepted', isAccepted);
    setIsAccepted('')
  }

  return (
    <div className={styles.content}>
      <div >Accept</div>
      <div> 
        <Button onClick={acceptCookies('accepted')}>Yes</Button>
        <Button onClick={acceptCookies('')}>No</Button>
      </div>
    </div>
  )
}