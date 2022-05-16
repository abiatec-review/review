import React from "react";

import styles from './styles.module.scss'

import { Button } from '../../atoms'


interface IProps {
  selectPage: any
  number: number
}

export const PagesBox: React.FC<IProps> = ({selectPage, number})=> {
  const pages = Array.from({length: number}, (_, i) => i + 1);
  
  return ( 
    <div className={styles.pagesBox}>
      {pages.length > 1  && pages.map((page: any) => {
        return <Button key={page} className={styles.pageNumberButton} handleClick={selectPage} type={'button'}>{page}</Button>
      })}
    </div>
  )
} 