import styles from './styles.module.scss'

import { Button, Input } from '../../atoms'


interface IProps {
  inputValue: string
  onChangeHandler: any
  getCharactersHandler: (event: any)=>void
}

export const SearchBox: React.FC<IProps> = ( {inputValue, onChangeHandler, getCharactersHandler})=> {

  return ( 
    <form className={styles.headerSearchBox}>
      <Input inputValue={inputValue} onChangeHandler={onChangeHandler}/>
      <Button buttonName='Find!'
              handleClick={getCharactersHandler}
              className={styles.submitButton}
              type={'submit'}/>
    </form>
  )
} 