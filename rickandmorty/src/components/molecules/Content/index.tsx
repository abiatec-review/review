
import styles from './style.module.scss';
import { ContentItem } from "../../atoms/ContentItem";
import {FetchMoreButton} from "../../atoms/FetchMoreButton";
import React, {useState} from "react";
import {Modal} from "../../atoms";

interface IProps{
    data: any;
    visible: number;
    setVisible: (visible: number) => void
}

export const Content:React.FC<IProps> = ({data, visible, setVisible}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const foundPerson = data?.characters?.find((item: any) => item.id === id)

    const showModal = () => {
        setModalVisible(prev => !prev);
    }

    return (
        <>
            <div className={styles.gallery}>
                { data.characters.slice(0, visible).map((item:any) => (
                    <ContentItem showModal={() => setModalVisible(true)} setId={setId} item={item} />
                ))}
            </div>
            {visible < data.characters.length &&
                <FetchMoreButton visible={visible} setVisible={setVisible}/>
            }
            {modalVisible &&
                <Modal showModal={showModal}>
                    <figure>
                        <img src={foundPerson?.image} alt={foundPerson?.name}/>
                        <figcaption>Name: {foundPerson?.name}</figcaption>
                        <figcaption>Status: {foundPerson?.status}</figcaption>
                        <figcaption>Species: {foundPerson?.species}</figcaption>
                        <figcaption>Gender: {foundPerson?.gender}</figcaption>
                        <figcaption>Origin name: {foundPerson?.origin?.name}</figcaption>
                        <figcaption>Location name: {foundPerson?.location?.name}</figcaption>
                    </figure>
                </Modal>
            }
        </>
    )
}
