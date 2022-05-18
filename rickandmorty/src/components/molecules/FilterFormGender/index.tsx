import React from 'react';

import { Radio } from "components/atoms"

import styles from './style.module.scss';

interface IProps {
  setFilterGender: (arg: string) => void
  filterGender: string
}

export const FilterFormGender:React.FC<IProps> = ({ filterGender, setFilterGender}) => {

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterGender(e.target.value)
  }

  return (
    <>
      <div className={styles.filterCont}>
        <div className={styles.filterTitle}>Please choose a {'Gender'}</div>
        <label className={styles.labelCont} htmlFor="gender">
          <Radio
            name={'gender'}
            value={'Male'}
            checked={filterGender === 'Male'}
            onChange={handleClick}
          />
          <Radio
            name={'gender'}
            value={'Female'}
            checked={filterGender === 'Female'}
            onChange={handleClick}
          />
          <Radio
            name={'gender'}
            value={'Genderless'}
            checked={filterGender === 'Genderless'}
            onChange={handleClick}
          />
          <Radio
            name={'gender'}
            value={'Unknown'}
            checked={filterGender === 'Unknown'}
            onChange={handleClick}
          />
        </label>

      </div>
    </>
  )
}
