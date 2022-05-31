import React from "react";

import styles from './styles.module.scss'

import { Button } from '../../atoms'


interface IProps {
  selectPage: (event: React.ChangeEvent<HTMLElement>) => void
  numb: number
}

export const PagesBox: React.FC<IProps> = ({selectPage, numb})=> {
  const pages = Array.from({length: numb}, (_, i) => i + 1);
  
  return ( 
    <div className={styles.pagesBox}>
      {pages.length > 1  && pages.map((page: number) => {
        return <Button key={page} className={styles.pageNumberButton} handleClick={selectPage} type={"button"}>{`${page}`}</Button>
      })}
    </div>
  )
} 