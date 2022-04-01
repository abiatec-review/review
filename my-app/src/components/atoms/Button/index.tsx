import styles from './styles.module.scss'

interface IProps {}

export const Button: React.FC<IProps> = ( {  } ) => {
  return ( 
    <button className={styles.submitButton}>Submit</button>
  )
}