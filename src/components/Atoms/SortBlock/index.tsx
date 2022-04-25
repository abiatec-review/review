import styles from './index.module.scss'
import {Button} from "../Button";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {sortHeroesByLocationAC, sortHeroesByNameAC} from "../../../redux/actions/heroActions";

interface IProps {

}

export const SortBlock: React.FC<IProps>= ({ }) => {
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
        <div>
            <label>Sort by name</label>
            <input
                name="isGoing"
                type="checkbox"
                checked={isSortedByName}
                onChange={sortItemsByName}
            />

            <label>Sort by location</label>
            <input
                name="isGoing"
                type="checkbox"
                checked={isSortedByLocation}
                onChange={sortItemsByLocation}
            />
        </div>
    )
}