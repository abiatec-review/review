
import { useCallback, useState, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from "react-redux";

import  styles from './index.module.scss'

import {Button, SearchInput} from "../../Atoms"
import { LOAD_HEROES, SAVE_HERO_NAME } from "../../../redux/actions/heroActions";
import { getButtonTextSelector } from '../../../redux/selectors/contentfulSelectors';
import { RootReducer } from '../../../redux/reducers';
import { getHeroName, getNextPage } from '../../../redux/selectors/heroesSelectors';
import { defineNextPage } from '../../../utils/validator';

const SearchBlock = () => {
  
  const name = useSelector(getHeroName)
  const nextPage = useSelector(getNextPage)
  
  const dispatch = useDispatch()
  const buttonText = useSelector(getButtonTextSelector)
  
  const onSearchChange = useCallback((e) => {
      dispatch({type: SAVE_HERO_NAME, payload: e.target.value}) 
  }, [name]);

  const onSubmit = useCallback(() => {
    dispatch({
      type: LOAD_HEROES, 
      payload: {
        name: name || '', 
        page: defineNextPage(nextPage) || 1
      }
    })
  }, [name]);

  const onKeyPressHandler = (e: KeyboardEvent) => {
    if (e.charCode === 13) {
        onSubmit();
    }
  }

  return (
    <div className={styles.searchBlock}>
      <SearchInput value={name} onSearchChange={onSearchChange} onKeyPressHandler={onKeyPressHandler}/>
      <Button onClick={onSubmit}>{buttonText?.buttonTitle || "Find character"}</Button>
    </div>
  )
}

export default SearchBlock