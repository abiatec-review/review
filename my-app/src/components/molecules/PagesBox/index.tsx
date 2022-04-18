import styles from './styles.module.scss'

import { Button } from '../../atoms'


interface IProps {
  selectPage: any
  number: any
}

export const PagesBox: React.FC<IProps> = ({selectPage, number})=> {
  let pages: any = [];
  for (let i = 1; i <= number; i++) {
    pages.push(i)
  }
  
  return ( 
    <div className={styles.PagesBox}>
      {pages.lenght !== 0 && pages.map((page: any) => {
        return <Button key={page} className={styles.pageNumberButton} handleClick={selectPage} type={'button'} buttonName={page}/>
      })}
    </div>
  )
} 