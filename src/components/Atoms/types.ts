/* eslint-disable no-unused-vars */
import React from 'react';

export interface IInput {
    reference: React.RefObject<HTMLInputElement>
}

export interface IImage {
    src: string,
    alt: string
}

export interface IButton {
    clickHandler?: ()=>void,
    text: string
}

export interface ITab {
    clickHandler?: ()=>void,
    text: string,
    active: boolean
}

export interface IShadowField {
    isVisible: boolean
}

export interface IInfoItem {
    data: Object | unknown,
    dataType: string
}

export interface IFunctions {
    [key:string] : (argument?: any) => any
}
