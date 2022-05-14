import React from 'react';

import {
    sortCharactersId,
    sortCharactersLocation,
    sortCharactersName, sortCharactersNameLocation
} from "../../../redux/actions";
import {useDispatch} from "react-redux";

import styles from './style.module.scss';

interface IProps{
    checkedName: boolean,
    checkedLocation: boolean,
    setCheckedName: (arg: boolean) => void,
    setCheckedLocation: (arg: boolean) => void
}

export const SortComponent:React.FC<IProps> = ({checkedName, setCheckedName, checkedLocation, setCheckedLocation}) => {

    const dispatch = useDispatch()

    const handleClickName = () => {
        if(checkedName) {
            setCheckedName(false)
            dispatch(sortCharactersId())
        }
        if(!checkedName && !checkedLocation) {
            setCheckedName(true)
            dispatch(sortCharactersName())
        }
        if(checkedName && checkedLocation) {
            setCheckedName(false)
            dispatch(sortCharactersLocation())
        }
        if(checkedLocation && !checkedName) {
            setCheckedName(true)
            dispatch(sortCharactersNameLocation())
        }
    }

    const handleClickLocation = () => {
        if(checkedLocation) {
            setCheckedLocation(false)
            dispatch(sortCharactersId())
        }
        if(!checkedName && !checkedLocation) {
            setCheckedLocation(true)
            dispatch(sortCharactersLocation())
        }
        if(checkedName && checkedLocation) {
            setCheckedLocation(false)
            dispatch(sortCharactersName())
        }
        if(checkedName && !checkedLocation) {
            setCheckedLocation(true)
            dispatch(sortCharactersNameLocation())
        }
    }

    return (
        <>
            <label className={styles.sortLabel}>
                Sort by name
            <input type="checkbox" checked={checkedName} onChange={handleClickName}/>
            </label>
            <label className={styles.sortLabel}>
                Sort by location
            <input type="checkbox" checked={checkedLocation} onChange={handleClickLocation}/>
            </label>
        </>
    )
}
