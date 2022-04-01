import { Button, Input } from "components/atoms";
// @ts-ignore
import styles from './style.module.scss';

interface IProps{}

export const SearchInput:React.FC<IProps> = ({}) => {
    return (
        <>
        <div className={styles.searchInput}>
        <Input/>
        <Button/>
        </div>
        </>
    )
}