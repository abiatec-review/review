import { ImageTypes } from '../../../utils/constants'
interface IProps {
  type: ImageTypes;
  className?: string;
  img?: string;
}

const Image: React.FC<IProps> = ({type, className, img}) => {
  switch(type) {
    case ImageTypes.logSvg: {
      return <img className={className} src={img} alt=""/>
    }
    case ImageTypes.imageError: {
      return <img className={className} src={img} alt=""/>
    }
  }
}

export default Image