import React, { FC } from "react";
import { ModalHeaderProps } from "./type";
import CloseButton from "../../atoms/CloseButton";
import CardTitle from "../../atoms/CardTitle";

const styles = {
    modalHeaderStyle: 'flex justify-between items-center mb-4 w-3/4',
}

const ModalHeader: FC<ModalHeaderProps> = ({ title, closeModal }) => {
    return(
        <div className={styles.modalHeaderStyle}>
            <CardTitle title={title}/>
            <CloseButton closeModal={closeModal}/>
        </div>
    );
}

export default ModalHeader;