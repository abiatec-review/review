import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface I_TouchableButton {
  buttonText: string;
  handleSubmit: () => void;
  isButtonDisableStatus: boolean;
  type: string;
}

const TouchableButton = ({
  buttonText,
  handleSubmit,
  isButtonDisableStatus,
  type,
}: I_TouchableButton) => {
  return (
    <View
      style={
        type === 'multipleButtons'
          ? multipleButtonsStyles.btnsContainer
          : singleButtonStyles.btnsContainer
      }>
      <TouchableOpacity
        disabled={isButtonDisableStatus}
        style={
          type === 'multipleButtons'
            ? multipleButtonsStyles.createAccBtn
            : singleButtonStyles.createAccBtn
        }
        onPress={handleSubmit}>
        <Text style={{textAlign: 'center'}}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const singleButtonStyles = StyleSheet.create({
  createAccBtn: {
    borderWidth: 1,
    borderColor: '#00000',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    padding: 2,
    paddingHorizontal: 15,
  },
  btnsContainer: {
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const multipleButtonsStyles = StyleSheet.create({
  createAccBtn: {
    borderWidth: 1,
    borderColor: '#00000',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    padding: 2,
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnsContainer: {
    flex: 1,
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
  },
});

export default TouchableButton;
