import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface I_TouchableButton {
  buttonText: string;
  handleSubmit: () => void;
  isButtonDisableStatus: boolean;
}

const TouchableButton = ({
  buttonText,
  handleSubmit,
  isButtonDisableStatus,
}: I_TouchableButton) => {
  return (
    <View style={styles.btnsContainer}>
      <TouchableOpacity
        disabled={isButtonDisableStatus}
        style={styles.createAccBtn}
        onPress={handleSubmit}>
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default TouchableButton;
