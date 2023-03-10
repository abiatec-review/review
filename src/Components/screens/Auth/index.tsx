import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {authSignIn, authSignUp} from '../../../redux/actions/authentification';
import Form from '../../Form';
import TouchableButton from '../../TouchableButton';

const LogIn = () => {
  const dispatch = useDispatch();
  const {
    Authentification: {authLoader, errorMessage},
  } = useSelector((Authentification: any) => Authentification);
  const [handleFormType, setHandleFormType] = useState('signIn');
  const signUpInputs = [
    {label: 'Email', inputName: 'email'},
    {label: 'Password', inputName: 'password'},
    {label: 'Name', inputName: 'name'},
  ];
  const signInInputs = [
    {label: 'Email', inputName: 'email'},
    {label: 'Password', inputName: 'password'},
  ];

  const swichFormType = () => {
    setHandleFormType(prev => (prev === 'signIn' ? 'signUp' : 'signIn'));
  };

  const handleFormData = (data: any) => {
    if (handleFormType === 'signUp') {
      dispatch(
        authSignUp({
          email: data.email,
          password: data.password,
          userName: data.name,
        }),
      );
    } else {
      dispatch(
        authSignIn({
          email: data.email,
          password: data.password,
        }),
      );
    }
  };

  return (
    <View style={styles.mainScreenContainer}>
      <Form
        title={handleFormType === 'signUp' ? 'Sign up' : 'Sign in'}
        inputItems={handleFormType === 'signUp' ? signUpInputs : signInInputs}
        buttonText={'Sign in'}
        handleData={handleFormData}
        isButtonDisableStatus={authLoader}
        validationMessage={errorMessage}
      />
      <TouchableButton
        buttonText={
          handleFormType === 'signUp' ? 'I have an acc' : "I haven't an acc"
        }
        isButtonDisableStatus={false}
        handleSubmit={swichFormType}
        type={'singleBtn'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LogIn;
