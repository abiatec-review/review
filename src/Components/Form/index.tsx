import React from 'react';
import {Control, useController, useForm} from 'react-hook-form';
import {SafeAreaView, TextInput, StyleSheet, Text, View} from 'react-native';
import TouchableButton from '../TouchableButton';

interface I_InputItems {
  inputName: string;
  label: string;
}

type T_handleData = object;

interface I_FormComponent {
  title: string;
  inputItems: I_InputItems[];
  buttonText: string;
  handleData: (data: T_handleData) => void;
  isButtonDisableStatus: boolean;
}

function Input({name, control}: {name: string; control: Control}) {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <TextInput
      value={field.value}
      style={styles.input}
      onChangeText={field.onChange}
    />
  );
}

const Form = ({
  title,
  inputItems,
  buttonText,
  handleData,
  isButtonDisableStatus,
}: I_FormComponent) => {
  const {control, handleSubmit} = useForm();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.safeAreaContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <View>
          {inputItems.map((itputItem: I_InputItems, itputItemId: number) => {
            return (
              <View key={itputItemId}>
                <Text>{itputItem.label}</Text>
                <Input name={itputItem.inputName} control={control} />
              </View>
            );
          })}
        </View>
      </View>

      <TouchableButton
        buttonText={buttonText}
        handleSubmit={handleSubmit(handleData)}
        isButtonDisableStatus={isButtonDisableStatus}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 25,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
  },
  safeArea: {
    width: '60%',
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
});

export default Form;
