import { ImageTypes } from '../../../utils/constants'
import imageCat from './cat.jpg'
interface IProps {
  type: ImageTypes;
  className?: string;
  img?: string;
}

const Image: React.FC<IProps> = ({type, className, img}) => {
  switch(type) {
    case ImageTypes.logSvg: {
      return <img className={className} src={img}/>
    }
    case ImageTypes.imageError: {
      return <img className={className} src={imageCat}/>
    }
  }
}

export default Image