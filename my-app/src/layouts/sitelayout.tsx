import { useState } from "react";

import { useDispatch } from "react-redux";
import { getCharacters } from "redux/actions/characters";
import { setCharacter } from "redux/actions/modalType";

import { Footer } from "components/organisms/Footer";
import { Header} from "../components/organisms";

interface IProps {
  children: JSX.Element
}

export const Sitelayout: React.FC<IProps> = ( {children} ) => {
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
              getCharactersHandler={getCharactersHandler}/>
      {children}
      <Footer />
    </>
  )
}