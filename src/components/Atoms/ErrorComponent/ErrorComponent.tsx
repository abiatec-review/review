import React from "react"
import "./index.css";
import { Image } from "../Image"
import { ImageTypes } from "../../../utils/constants"

interface IProps {

}
export const ErrorComponent: React.FC<IProps> = () => {
  return (
    <div className='error-block'>
      <div className="text-error">Oops, something going wrong...</div>

      <Image type={ImageTypes.imageError} className="image-error"/>

      <div className="text-error">Please, try another character's name</div>
    </div>
  )
}