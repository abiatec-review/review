import {baseModel} from "./baseModel";

export interface TCharacter<T> extends baseModel {
    gender: T
    image: T
    species: T
    status: T
 }
