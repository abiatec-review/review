import React, {useState} from 'react';

import {
    sortCharactersId,
    sortCharactersLocation,
    sortCharactersName, sortCharactersNameLocation
} from "../../../redux/actions";
import {useDispatch} from "react-redux";

import styles from './style.module.scss';


export const SortComponent = () => {

    const [checkedName, setCheckedName] = useState<boolean>(false)
    const [checkedLocation, setCheckedNameLocation] = useState<boolean>(false)

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
            setCheckedNameLocation(false)
            dispatch(sortCharactersId())
        }
        if(!checkedName && !checkedLocation) {
            setCheckedNameLocation(true)
            dispatch(sortCharactersLocation())
        }
        if(checkedName && checkedLocation) {
            setCheckedNameLocation(false)
            dispatch(sortCharactersName())
        }
        if(checkedName && !checkedLocation) {
            setCheckedNameLocation(true)
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
