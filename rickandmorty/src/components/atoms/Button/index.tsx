// @ts-ignore
import styles from './style.module.scss';

interface IProps{};

export const Button:React.FC<IProps> = ({}) => {
    return (
        <button className={styles.button}>Button</button>
    )
}