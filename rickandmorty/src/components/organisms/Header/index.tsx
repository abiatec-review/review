import { SearchInput } from "components/molecules"
import { Image } from "components/atoms"
// @ts-ignore
import styles from './style.module.scss';

interface IProps{}

export const Header:React.FC<IProps> = ({init, setVisible}) => {
    return (
        <header className={styles.Header}>
            <Image type={'list'} className={styles.Header_logo}/>
            <SearchInput init={init} setVisible={setVisible}/>
        </header>
    )
}
