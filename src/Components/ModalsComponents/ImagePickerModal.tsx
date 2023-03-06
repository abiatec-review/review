import React from 'react';
import {SafeAreaView, Pressable, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {setModalType} from '../../redux/actions/modal';

const ImagePickerModal = () => {
  const dispatch = useDispatch();

  const onImageLibraryPress = () => {
    console.log('onImageLibraryPress');
  };

  const onCameraPress = () => {
    console.log('onCameraPress');
  };

  const onCancel = () => {
    console.log('onCancel');
    dispatch(setModalType({modalType: '', modalData: null}));
  };

  return (
    <SafeAreaView style={{backgroundColor: 'red'}}>
      <Pressable onPress={onImageLibraryPress}>
        <Text>Library</Text>
      </Pressable>
      <Pressable onPress={onCameraPress}>
        <Text>Camera</Text>
      </Pressable>
      <Pressable onPress={onCancel}>
        <Text>Cancel</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ImagePickerModal;
