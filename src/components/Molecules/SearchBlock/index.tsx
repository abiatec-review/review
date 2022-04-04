
import { useCallback, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loadHeroesAC, saveHeroNameAC } from "redux/actions/heroActions";
import { getButtonTextSelector } from 'redux/selectors/contentfulSelectors';
import { getHeroNameSelector, getNextPageSelector } from 'redux/selectors/heroesSelectors';

import {Button, SearchInput} from "components/Atoms"

import { defineNextPage } from 'utils/validator';

import  styles from './index.module.scss'

const SearchBlock = () => {
  
  const name = useSelector(getHeroNameSelector)
  const nextPage = useSelector(getNextPageSelector)
  const buttonText = useSelector(getButtonTextSelector)
  
  const dispatch = useDispatch()
  
  const onSearchChange = useCallback((e) => {
    dispatch(saveHeroNameAC(e.target.value))
  }, [name]);

  const onSubmit = useCallback(() => {
    dispatch(loadHeroesAC({
      name: name || '', 
      page: defineNextPage(nextPage) || '1'
    }))
  }, [name]);

  const onKeyPressHandler = (e: KeyboardEvent) => {
    if (e.charCode === 13 && !!name) {
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