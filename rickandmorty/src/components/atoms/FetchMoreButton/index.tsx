import React from 'react';
import styles from './style.module.scss';

interface IProps{
  clickHandler: () => void
}

export const FetchMoreButton:React.FC<IProps> = ({clickHandler}) => {

  return (
    <button className={styles.button} onClick={clickHandler}>Add More</button>
  )
}
