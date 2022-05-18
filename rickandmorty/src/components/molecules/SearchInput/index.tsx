import React from 'react';

import {useDispatch} from "react-redux";

import {
  deleteCharacters,
  getCharacters,
  setError
} from 'redux/actions';

import { Button, Input } from "components/atoms";

import styles from './style.module.scss';

interface IProps{
  inputRef: React.RefObject<HTMLInputElement>,
  setFilterVisible: (arg: boolean) => void,
  setCheckedName: (arg: boolean) => void,
  setCheckedLocation: (arg: boolean) => void
}

export const SearchInput:React.FC<IProps> = ({inputRef, setFilterVisible, setCheckedName, setCheckedLocation}) => {

  const dispatch = useDispatch()

  const onSubmit = () => {
    setCheckedName(false)
    setCheckedLocation(false)
    setFilterVisible(false)
    dispatch(deleteCharacters())
    dispatch(setError(false))
    dispatch(getCharacters({characterName: inputRef?.current?.value ? inputRef.current.value : ''}))
  }


  return (
    <div className={styles.searchInput}>
      <Input inputRef={inputRef}/>
      <Button onSubmit={onSubmit} />
    </div>
  )
}
