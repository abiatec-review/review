
import { useCallback, useState, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from "react-redux";

import  styles from './index.module.scss'

import {Button, SearchInput} from "../../Atoms"
import { LOAD_HEROES } from "../../../redux/actions/heroActions";
import { RootReducer } from '../../../redux/reducers';
import { getButtonTextSelector } from '../../../redux/selectors/contentfulSelectors';

const SearchBlock = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch()
  const buttonText = useSelector(getButtonTextSelector)
  const onSearchChange = useCallback((e) => {
      setName(e.target.value)
  }, [name]);

  const onSubmit = useCallback(() => {
    dispatch({type: LOAD_HEROES, payload: name})
  }, [name]);

  const onKeyPressHandler = (e: KeyboardEvent) => {
    if (e.charCode === 13) {
        onSubmit();
    }
  }

  return (
    <div className={styles.searchBlock}>
      <SearchInput value={name} onSearchChange={onSearchChange} onKeyPressHandler={onKeyPressHandler}/>
      <Button onClick={onSubmit}>{buttonText?.buttonTitle}</Button>
    </div>
  )
}

export default SearchBlock