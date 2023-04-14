import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { authSignUpError } from '../../redux/actions/authentication/actions.ts';

export interface ValidationMessageProps {
  validationMessage: string;
}

export const ValidationMessage = ({
  validationMessage,
}: ValidationMessageProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const signUpErrorMessage = setTimeout(() => {
      dispatch(
        authSignUpError({
          errorMessage: null,
        }),
      );
    }, 3500);

    return () => clearTimeout(signUpErrorMessage);
  }, [dispatch, validationMessage]);

  return (
    <View style={styles.validationContainer}>
      <Text style={styles.validationMessage}>{validationMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  validationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  validationMessage: {
    color: '#FFFFFF',
  },
});
