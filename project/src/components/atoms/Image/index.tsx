import React, { FC } from "react";
import { ImageProps } from "./type";

const styles = {
    imageStyle: 'rounded-2xl mb-2',
}

const Image: FC<ImageProps> = ({ link, alt }) => {
    return(
        <img
            src={link}
            alt={alt}
            className={styles.imageStyle}
        /> 
        
    );
}

export default Image;