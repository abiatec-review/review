import React, {useEffect, useState} from "react";

import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import { getCharacters } from "redux/actions/characters";
import { setCharacter } from "redux/actions/modalType";

import { Footer } from "components/organisms/Footer";
import {Header, Main} from "../components/organisms";
import {SearchBox} from "../components/molecules/SearchBox";
import {useNavigate} from "react-router-dom";
import {auth} from "../utils/firebase";

export const Site: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeHandler = (event: any) => {
    setInputValue(event.target.value);
  }

  const getCharactersHandler = (event: any) => {
    event.preventDefault();
    if (inputValue) {
      dispatch(getCharacters(inputValue))
      dispatch(setCharacter('character'))
    }
  }

  return ( 
    <>
      <Header inputValue={inputValue}
              onChangeHandler={onChangeHandler}
              getCharactersHandler={getCharactersHandler}
              children={<SearchBox inputValue={inputValue}
                                   onChangeHandler={onChangeHandler}
                                   getCharactersHandler={getCharactersHandler}/>}/>
      <Main />
      <Footer />
    </>
  )
}