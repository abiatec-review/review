// @ts-ignore
import styles from './style.module.scss';
import {useSelector} from "react-redux";


import {ContentOne} from "../../atoms/ContentItem";

interface IProps{}

export const ContentList:React.FC<IProps> = ({visible, setVisible}) => {

    // @ts-ignore
    const data = useSelector(state => state.characters)

    const ContentItems = data === 0 ? null :  <ContentOne data={data} visible={visible} setVisible={setVisible} />

    return (
       <>
           {ContentItems}
       </>
    )
}
