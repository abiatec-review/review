import { Picture } from "../../atoms";
import { SearchBox } from "../../molecules";
import styles from './styles.module.scss'
import {constants} from '../../../utils/constants'

interface IProps {
  inputValue: string
  onChangeHandler: any
  getCharactersHandler: any
}

export const Header: React.FC<IProps> = ( {inputValue, onChangeHandler,getCharactersHandler} ) => {
  return ( 
    <div className={styles.header}>
      <Picture type={constants.HEADER_PICTURE} srcImage={""}/>
      <SearchBox inputValue={inputValue}
                  onChangeHandler={onChangeHandler}
                  getCharactersHandler={getCharactersHandler}/>
    </div>
  )
} 