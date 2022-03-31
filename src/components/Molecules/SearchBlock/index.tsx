
import { useCallback, useState, KeyboardEvent } from 'react';
import { useDispatch } from "react-redux";

import './index.css'

import Button from "../../Atoms/Button"
import SearchInput from "../../Atoms/SearchInput";
import { LOAD_HEROES } from "../../../redux/actions/heroActions";

export const SearchBlock = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch()

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
    <div className="search-block">
      <SearchInput value={name} onSearchChange={onSearchChange} onKeyPressHandler={onKeyPressHandler}/>
      <Button onClick={onSubmit}>Find character</Button>
    </div>
  )
}