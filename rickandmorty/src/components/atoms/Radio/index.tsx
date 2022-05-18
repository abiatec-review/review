import React from 'react';

import styles from './style.module.scss';

interface IProps {
  name: string,
  value: string,
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}

export const Radio:React.FC<IProps> = (props) => {

  return (
    <label className={styles.radioLabel}>
      {props.value}
      <input
        className={styles.radioInput}
        type="radio"
        id={props.value}
        {...props}
      />
    </label>
  )
}
