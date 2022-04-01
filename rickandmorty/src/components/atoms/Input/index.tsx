// @ts-ignore
import styles from './style.module.scss';

interface IProps{}

export const Input:React.FC<IProps> = ({}) => {
    return (
        <input className={styles.input}/>
    )
}