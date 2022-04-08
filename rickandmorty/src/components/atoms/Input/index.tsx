// @ts-ignore
import styles from './style.module.scss';

interface IProps{value: string,
    onChange:any}

export const Input:React.FC<IProps> = ({value, onChange}) => {

    return (
        <input value={value} onChange={onChange} className={styles.input}/>
    )
}
