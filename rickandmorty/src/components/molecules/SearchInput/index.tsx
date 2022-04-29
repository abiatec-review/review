import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCharacters, getCharacters, setError} from 'redux/actions';

import { Button, Input } from "components/atoms";

import styles from './style.module.scss';

interface IProps{
    inputRef: React.RefObject<HTMLInputElement>
}

export const SearchInput:React.FC<IProps> = ({inputRef}) => {

    const dispatch = useDispatch()

    const onSubmit = () => {
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
