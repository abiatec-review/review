import React from "react";

import styles from './styles.module.scss'

import { Button } from '../../atoms'


interface IProps {
  selectPage: any
  number: number
}

export const PagesBox: React.FC<IProps> = ({selectPage, number})=> {
  let pages: Array<number> = [];
  for (let i = 1; i <= number; i++) {
    pages.push(i)
  }
  
  return ( 
    <div className={styles.pagesBox}>
      {pages.length > 1  && pages.map((page: any) => {
        return <Button key={page} className={styles.pageNumberButton} handleClick={selectPage} type={'button'}>{page}</Button>
      })}
    </div>
  )
} 