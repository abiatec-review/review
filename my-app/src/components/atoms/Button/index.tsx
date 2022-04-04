import styles from './styles.module.scss'

interface IProps {
  buttonName: string;
}

export const Button: React.FC<IProps> = ( { buttonName } ) => {
  return ( 
    <button className={styles.submitButton}>{buttonName}</button>
  )
}