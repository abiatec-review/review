import {useState, useCallback} from 'react';

import { Button, Input } from "components/atoms";

import styles from './style.module.scss';

import {getCharacters} from 'redux/actions';
import {useDispatch} from "react-redux";

interface IProps{
    setVisible: (init: number) => void
}

export const SearchInput:React.FC<IProps> = ({setVisible}) => {

    const [value, setValue] = useState<string>('');

    const dispatch = useDispatch()


    const handleChange = useCallback((e) => {

        setValue(e.target.value)
    }, [])

    const onSubmit = useCallback(() => {
        setVisible(8)

        dispatch(getCharacters({characterName: value}))
    }, [value])


    return (
        <>
        <div className={styles.searchInput}>
        <Input value={value} onChange={handleChange}/>
        <Button onSubmit={onSubmit}/>
        </div>
        </>
    )
}
