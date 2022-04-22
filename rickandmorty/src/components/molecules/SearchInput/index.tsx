import React, {useState, useCallback, useEffect, useRef} from 'react';

import { Button, Input } from "components/atoms";

import styles from './style.module.scss';

import {getCharacters} from 'redux/actions';
import {useDispatch} from "react-redux";

interface IProps{
    inputRef: React.RefObject<HTMLInputElement>
    setVisible: (init: number) => void
}

export const SearchInput:React.FC<IProps> = ({inputRef}) => {

    const dispatch = useDispatch()

    const onSubmit = () => {
            dispatch(getCharacters({characterName: inputRef?.current?.value ? inputRef.current.value : ''}))
    }


    return (
        <>
        <div className={styles.searchInput}>
        <Input inputRef={inputRef}/>
        <Button onSubmit={onSubmit} value={inputRef?.current?.value}/>
        </div>
        </>
    )
}
