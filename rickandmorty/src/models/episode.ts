import {baseModel} from "./baseModel";

export interface TEpisode<T> extends baseModel {
    air_date: T;
    characters: Array<T>;
}
