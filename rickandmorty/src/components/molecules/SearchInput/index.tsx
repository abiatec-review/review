import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCharacters, getCharacters, setError} from 'redux/actions';

import { Button, Input } from "components/atoms";

import styles from './style.module.scss';

interface IProps{
    inputRef: React.RefObject<HTMLInputElement>,
    setFilterVisible: (arg: boolean) => void
}

export const SearchInput:React.FC<IProps> = ({inputRef, setFilterVisible}) => {

    const dispatch = useDispatch()

    const onSubmit = () => {

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
