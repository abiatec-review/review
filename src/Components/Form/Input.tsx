import React from 'react';
import { Control, useController } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';

export interface InputProps<T> {
  name: string;
  control: T;
}

export const FormInput = ({ name, control }: InputProps<Control>) => {
  const { field } = useController({
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
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5,
  },
});
