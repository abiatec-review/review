import React, { FC } from "react";
import { CardInfoItemProps } from "./type";

const styles = {
    cardInfoItemStyle: 'grid justify-center grid-rows-1 grid-cols-2 gap-2 border-b-2 border-input-color p-1',
}

const CardInfoItem: FC<CardInfoItemProps> = ({ field, data }) => {
    return(
        <li className={styles.cardInfoItemStyle}>
            <span>{field.toUpperCase()}</span>
            <span>{data}</span>
        </li>
    );
}

export default CardInfoItem;