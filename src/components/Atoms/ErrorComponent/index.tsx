import React from "react"

import styles from "./index.module.scss";

import { ImageTypes } from "../../../utils/constants"
import Image from "../Image";

const ErrorComponent: React.FC = () => {
  return (
    <div className={styles.block}>
      <div className={styles.text}>Oops, something going wrong...</div>
      <Image type={ImageTypes.imageError} className={styles.image}/>
      <div className={styles.text}>Please, try another character's name</div>
    </div>
  )
}

export default ErrorComponent