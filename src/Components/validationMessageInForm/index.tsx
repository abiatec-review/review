import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {authSignUpError} from '../../redux/actions/authentification';

interface I_ValidationMessage {
  validationMessage: string;
}

const ValidationMessage = ({validationMessage}: I_ValidationMessage) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        authSignUpError({
          errorMessage: null,
        }),
      );
    }, 3500);
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

export default ValidationMessage;
