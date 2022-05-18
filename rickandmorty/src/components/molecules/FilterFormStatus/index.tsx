import React from 'react';

import { Radio } from "components/atoms"

import styles from './style.module.scss';

interface IProps {
  setFilterStatus: (arg: string) => void
  filterStatus: string
}


export const FilterFormStatus:React.FC<IProps> = ({ filterStatus, setFilterStatus}) => {

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterStatus(e.target.value)
  }

  return (
    <>
      <div className={styles.filterCont}>
        <div className={styles.filterTitle}>Please choose a {'Status'}</div>
        <label className={styles.labelCont} htmlFor="status">
          <Radio
            name={'status'}
            value={'Alive'}
            checked={filterStatus === 'Alive'}
            onChange={handleClick}
          />
          <Radio
            name={'status'}
            value={'Dead'}
            checked={filterStatus === 'Dead'}
            onChange={handleClick}
          />
          <Radio
            name={'status'}
            value={'Unknown'}
            checked={filterStatus === 'Unknown'}
            onChange={handleClick}
          />
        </label>

      </div>
    </>
  )
}
