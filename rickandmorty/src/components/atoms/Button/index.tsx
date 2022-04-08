
// @ts-ignore
import styles from './style.module.scss';

interface IProps{onSubmit: () => void};


// @ts-ignore
export const Button:React.FC<IProps> = ({onSubmit}) => {


    return (
        <button className={styles.button} onClick={onSubmit}>Button</button>
    )
}