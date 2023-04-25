import React from 'react';
import { Control, useForm } from 'react-hook-form';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableButton, ValidationMessage } from '..';
import { FormInput } from './Input';

export interface FormComponentProps {
  title: string;
  inputItems: InputItemsProps[];
  buttonText: string;
  handleData: (data: { email: string; password: string; name: string }) => void;
  isButtonDisableStatus: boolean | undefined;
  validationMessage: string | undefined | null;
}

export interface InputItemsProps {
  inputName: string;
  label: string;
}

type FormValues = {
  email: string;
  password: string;
  name?: string;
};

export const Form = ({
  title,
  inputItems,
  buttonText,
  handleData,
  isButtonDisableStatus,
  validationMessage,
}: FormComponentProps) => {
  const { control, handleSubmit } = useForm<FormValues>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.safeAreaContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <View>
          {inputItems.map((itputItem: InputItemsProps, itputItemId: number) => {
            return (
              <View key={itputItemId}>
                <Text>{itputItem.label}</Text>
                <FormInput
                  name={itputItem.inputName}
                  control={control as unknown as Control}
                />
              </View>
            );
          })}
        </View>
      </View>
      <Text>
        {validationMessage && (
          <ValidationMessage validationMessage={validationMessage} />
        )}
      </Text>

      <TouchableButton
        buttonText={buttonText}
        handleSubmit={handleSubmit(handleData as () => void)}
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
