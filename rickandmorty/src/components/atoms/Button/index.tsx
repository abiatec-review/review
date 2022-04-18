import styles from './style.module.scss';

interface IProps{onSubmit: () => void};


export const Button:React.FC<IProps> = ({onSubmit}) => {


    return (
        <button className={styles.button} onClick={onSubmit}>Button</button>
    )
}
