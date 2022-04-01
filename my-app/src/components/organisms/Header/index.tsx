import { Picture } from "../../atoms";
import { SearchBox } from "../../molecules";
import styles from './styles.module.scss'
import {constants} from '../../../utils/constants'

interface IProps {
  
}

export const Header: React.FC<IProps> = ( {} ) => {
  return ( 
    <div className={styles.header}>
      <Picture type={constants.HEADER_PICTURE}/>
      <SearchBox />
    </div>
  )
} 