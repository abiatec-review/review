import { CharacterFullInfo, ImagePickerModal } from '@modals/index';
import React from 'react';
import { Text } from 'react-native';

interface I_ModalController {
  modalType: string;
}

const ModalController = ({ modalType }: I_ModalController) => {
  switch (modalType) {
    case 'characterFullInfo': {
      return <CharacterFullInfo />;
    }
    case 'loadAvatar': {
      return <ImagePickerModal />;
    }
    default:
      return <Text>Type is not valid</Text>;
  }
};

export default ModalController;
