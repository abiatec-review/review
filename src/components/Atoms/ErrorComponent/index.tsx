import React from "react"

import styles from "./index.module.scss";

import { ImageTypes } from "../../../utils/constants"
import Image from "../Image";
import { useSelector } from "react-redux";
import { getErrorImageSelector, getErrorTextSelector } from "../../../redux/selectors/contentfulSelectors";

const ErrorComponent: React.FC = () => {
  const errorImage = useSelector(getErrorImageSelector);
  const errorText = useSelector(getErrorTextSelector);
  
  return (
    <div className={styles.block}>
      <Image type={ImageTypes.imageError} className={styles.image} img={errorImage}/>
      <div className={styles.text}>{errorText}</div>
    </div>
  )
}

export default ErrorComponent