import React, {useState} from "react";

import {useDispatch} from "react-redux";
import {getCharacters} from "src/redux/actions/characters";
import {setCharacter} from "src/redux/actions/modalType";

import {Footer} from "src/components/organisms/Footer";
import {Header, Main} from "src/components/organisms";
import {SearchBox} from "src/components/molecules";

export const Site: React.FC = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const getCharactersHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue) {
            dispatch(getCharacters(inputValue))
            dispatch(setCharacter('character'))
        }
    }

    return (
        <>
            <Header
                children={<SearchBox inputValue={inputValue}
                                     onChangeHandler={onChangeHandler}
                                     getCharactersHandler={getCharactersHandler}/>}/>
            <Main/>
            <Footer/>
        </>
    )
}