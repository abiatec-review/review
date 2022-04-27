
import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {sortHeroesByLocationAC, sortHeroesByNameAC} from "redux/actions/heroActions";

import styles from './styles.module.scss'

export const SortBlock: React.FC= () => {
    const [isSortedByName, setIsSortedByName] = useState<boolean>(false)
    const [isSortedByLocation, setIsSortedByLocation] = useState<boolean>(false)
    const dispatch = useDispatch();

    const sortItemsByLocation = () => {
        setIsSortedByLocation(!isSortedByLocation);
        dispatch(sortHeroesByLocationAC(!isSortedByLocation))
    }

    const sortItemsByName = () => {
        setIsSortedByName(!isSortedByName);
        dispatch(sortHeroesByNameAC(!isSortedByName))
    }

    return (
        <div className={styles.sortBlock}>
            <label className={styles.label}>
                Sort by name
                <input
                    className={styles.checkbox}
                    name="isGoing"
                    type="checkbox"
                    checked={isSortedByName}
                    onChange={sortItemsByName}
                />
            </label>
            <label className={styles.label}>
                Sort by location
                <input
                    className={styles.checkbox}
                    name="isGoing"
                    type="checkbox"
                    checked={isSortedByLocation}
                    onChange={sortItemsByLocation}
                />
            </label>
        </div>
    )
}