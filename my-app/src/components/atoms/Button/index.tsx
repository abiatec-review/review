import styles from './styles.module.scss'

interface IProps {
  buttonName?: string
  handleClick: any
  className: any
  type: any
}

export const Button: React.FC<IProps> = ( { buttonName, handleClick, className, type } ) => {
  return ( 
    <button className={className}
            onClick={handleClick}
            type={type}>
            {buttonName}</button>
  )
}