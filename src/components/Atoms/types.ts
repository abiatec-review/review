import React from 'react';

export interface IInput {
    reference: React.RefObject<HTMLInputElement>
}

export interface IImage {
    src: string,
    alt: string
}

export interface IButton {
    clickHandler: ()=>void,
    text: string
}
