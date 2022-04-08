import {useState, useCallback} from 'react';

import { Button, Input } from "components/atoms";

import styles from './style.module.scss';
//@ts-ignore
import {getCharacters} from 'redux/actions';
import {useDispatch} from "react-redux";

interface IProps{}

export const SearchInput:React.FC<IProps> = ({init, setVisible}) => {

    const [value, setValue] = useState<string>('');

    const dispatch = useDispatch()

    // @ts-ignore
    const handleChange = useCallback((e) => {
        // @ts-ignore
        setValue(e.target.value)
    }, [])

    const onSubmit = useCallback(() => {
        setVisible(init)
        //@ts-ignore
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
