import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "redux/actions/characters";
import { Header, Main} from "../components/organisms";

interface IProps {
  children: JSX.Element
}

export const Sitelayout: React.FC<IProps> = ( {} ) => {

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (event: any) => {
    setInputValue(event.target.value);
    console.log(inputValue)
  }

  const getCharactersHandler = () => {
    if (inputValue !== '') {
      dispatch(getCharacters(inputValue))
    }
  }

  return ( 
    <>
      <header>
        <Header inputValue={inputValue}
                onChangeHandler={onChangeHandler}
                getCharactersHandler={getCharactersHandler}/>
      </header>
      <main>
        <Main />
      </main>
      <footer>

      </footer>
    </>
  )
}