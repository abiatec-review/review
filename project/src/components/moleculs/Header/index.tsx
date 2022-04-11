import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { fetchCards } from "../../../api/servercies/fetchCards";
import { useDebouncing } from "../../../utils/hooks/useDebounce";
import Input from "../../atoms/Input";
import { useDispatch } from "react-redux";
import { CardActionTypes } from "../../../redux/actions/card";

const styles = {
    headerStyles: 'p-12 flex justify-center items-center fixed top-0 left-0 right-0 rounded-3xl bg-header-color shadow-header-shadow',
}

const Header: FC = () => {
    const [value, setValue] = useState('');
    const debouncedValue = useDebouncing(value, 1000);
    const dispatch = useDispatch()

    useEffect(() => {
        if(debouncedValue) {
            dispatch({
                type: CardActionTypes.FETCH_CARDS,
                payload: debouncedValue,
            })
        }
    }, [debouncedValue]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return(
        <header className={styles.headerStyles}>
            <Input value={value} changeHandler={changeHandler}/>
        </header>
    );
}

export default Header;