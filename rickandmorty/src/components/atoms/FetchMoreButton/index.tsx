import styles from './style.module.scss';

interface IProps{
    visible: number;
    setVisible: (visible: number) => void
};

export const FetchMoreButton:React.FC<IProps> = ({visible, setVisible}) => {

    const fetchMore = () => {
        setVisible(visible + 8)
    }

    return (
        <button className={styles.button} onClick={fetchMore}>Fetch More</button>
    )
}
