import React from "react";

import { ImageTypes } from "utils/constants";

interface IProps {
  type: ImageTypes;
  className?: string;
  img?: string;
}

export const Image: React.FC<IProps> = ({type, className, img}) => {
  switch(type) {
    case ImageTypes.logSvg: {
      return <img className={className} src={img} alt="rickMorty"/>
    }
    case ImageTypes.imageError: {
      return <img className={className} src={img} alt="cat"/>
    }
    default: {
      return null;
    }
  }
}