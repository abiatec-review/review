import React from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableButton, ValidationMessage } from '..';
import { FormInput } from './Input';

export interface FormComponentProps {
  title: string;
  inputItems: InputItemsProps[];
  buttonText: string;
  handleData: (data: object) => void;
  isButtonDisableStatus: boolean;
  validationMessage: string;
}

export interface InputItemsProps {
  inputName: string;
  label: string;
}

export const Form = ({
  title,
  inputItems,
  buttonText,
  handleData,
  isButtonDisableStatus,
  validationMessage,
}: FormComponentProps) => {
  const { control, handleSubmit } = useForm();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.safeAreaContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <View>
          {inputItems.map((itputItem: InputItemsProps, itputItemId: number) => {
            return (
              <View key={itputItemId}>
                <Text>{itputItem.label}</Text>
                <FormInput name={itputItem.inputName} control={control} />
              </View>
            );
          })}
        </View>
      </View>
      {validationMessage && (
        <ValidationMessage validationMessage={validationMessage} />
      )}

      <TouchableButton
        buttonText={buttonText}
        handleSubmit={handleSubmit(handleData)}
        isButtonDisableStatus={isButtonDisableStatus}
        type={'singleBtn'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
  },
  safeArea: {
    width: '80%',
    borderRadius: 15,
    backgroundColor: 'rgba(151,216,237, 0.5)',
  },
  safeAreaContainer: {
    padding: 15,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  createAccBtn: {
    borderWidth: 1,
    borderColor: '#00000',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    padding: 2,
  },
  btnsContainer: {
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  validationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  validationMessage: {
    color: '#FFFFFF',
  },
});
