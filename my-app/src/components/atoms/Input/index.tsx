import styles from './styles.module.scss'

interface IProps {}

export const Input: React.FC<IProps> = ( {  } ) => {
  return ( 
    <input className={styles.headerInputField}></input>
  )
}