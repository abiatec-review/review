/* eslint-disable no-unused-vars */
import React, { FunctionComponentElement, ReactElement } from 'react';

export interface IInput {
  reference: React.RefObject<HTMLInputElement>
}

export interface IImage {
  src: string,
  alt: string,
  pdd?: string
}

export interface IButton {
  clickHandler?: ()=>void,
  text: string,
  className?:string
}

export interface ITab {
  clickHandler?: ()=>void,
  text: string,
  active: boolean
}

export interface IShadowField {
  isVisible: boolean,
  closeModalFunction: ()=>void
}

export interface IInfoItem {
  data?: string | { name: string},
  dataType: string
}

export interface IInfoItemRenderFunction {
  [key:string] : (argument?: string | { name: string}) => string | FunctionComponentElement<HTMLImageElement> | null | ReactElement<HTMLImageElement>
}
