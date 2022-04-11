import React, { FC, useEffect } from "react";
import CardInfoItem from "../../atoms/CardInfoItem";
import { CardInfoProps } from "./type";
import { IResults } from "../../../models/responseTypes";
import { IRequireData } from "./type";

const styles = {
    cardInfoStyle: 'w-1/2',
}

const requireFields: string[] = ['name', 'status', 'species', 'gender'];

const CardInfo: FC<CardInfoProps> = ({ cardData }) => {
    const {
        location: {
            name,
        }
    } = cardData;

    return(
        <ul className={styles.cardInfoStyle}>
            {requireFields.map((item) => {
                return(
                    <CardInfoItem
                        key={item}
                        field={item}
                        data={cardData[item as keyof typeof cardData]}
                    />
                );
            })}
            <CardInfoItem
                field='location'
                data={name}
            />
        </ul>
    );
}

export default CardInfo;