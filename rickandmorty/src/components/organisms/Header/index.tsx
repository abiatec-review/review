import { SearchInput } from "components/molecules"
import { Image } from "components/atoms"
import styles from './style.module.scss';

interface IProps{
    setVisible: (init: number) => void
}

export const Header:React.FC<IProps> = ({setVisible}) => {
    return (
        <header className={styles.Header}>
            <Image type={'list'} className={styles.Header_logo}/>
            <SearchInput setVisible={setVisible}/>
        </header>
    )
}
