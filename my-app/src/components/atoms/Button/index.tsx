import styles from './styles.module.scss'

interface IProps {
  buttonName: string;
  handleClick: any;
}

export const Button: React.FC<IProps> = ( { buttonName, handleClick } ) => {
  return ( 
    <button className={styles.submitButton}
            onClick={handleClick}>
              {buttonName}</button>
  )
}