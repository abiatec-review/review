import React from "react";
import { Button } from "components/Atoms"

import { isAcceptedCookiesLS } from "utils/constants";

import styles from "./index.module.scss"

interface IProps {
  setIsAccepted: (isAccepted: string) => void;
}

export const AcceptSnack: React.FC<IProps> = ({setIsAccepted}) => {

  const acceptCookies = (isAccepted: string) => () => {
    localStorage.setItem(isAcceptedCookiesLS, isAccepted);
    setIsAccepted(isAcceptedCookiesLS)
  }

  return (
    <div className={styles.content}>
      <div className={styles.header}>Please, click "Yes" to accept all cookies</div>
      <div> 
        <Button className={styles.button} onClick={acceptCookies('accepted')}>Yes</Button>
        <Button className={styles.button} onClick={acceptCookies('')}>No</Button>
      </div>
    </div>
  )
}