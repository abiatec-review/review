import styles from './styles.module.scss'

import { Button, Input } from '../../atoms'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCharacters } from 'redux/actions/characters';

interface IProps {
  inputValue: string
  onChangeHandler: any
  getCharactersHandler: any
}

export const SearchBox: React.FC<IProps> = ( {inputValue, onChangeHandler,getCharactersHandler})=> {

  // const dispatch = useDispatch();

  // const [inputValue, setInputValue] = useState('');

  // const onChangeHandler = (event: any) => {
  //   setInputValue(event.target.value);
  //   console.log(inputValue)
  // }

  // const getCharactersHandler = (inputValue: string) => {
  //   console.log(inputValue)
  //   dispatch(getCharacters('rick'))
  // }

  return ( 
    <div className={styles.headerSearchBox}>
      <Input inputValue={inputValue} onChangeHandler={onChangeHandler}/>
      <Button buttonName='Submit'
              handleClick={getCharactersHandler}/>
    </div>
  )
} 