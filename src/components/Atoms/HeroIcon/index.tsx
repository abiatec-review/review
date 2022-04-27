import React from "react";

import styles from './index.module.scss'

interface IProps {
  name: string;
  image: string;
}
export const HeroIcon: React.FC<IProps>= ({name, image}) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt={name}/>
      <div className={styles.name}>{name}</div>
    </div>
  )
}