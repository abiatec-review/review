import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setModalType } from '../../redux/modals/actions';
import {
  CameraOptions,
  // launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import { Image } from 'react-native-elements';

import { TouchableButton } from '@components/index';
import { userLoadAvatar } from '../../redux/authentication/actions';
import { useAppSelector } from '../../hooks/useAppSelector';

export const ImagePickerModal = () => {
  const dispatch = useDispatch();
  const { avatarLoader } = useAppSelector(store => store.Authentication);

  const [newImage, setNewImage] = useState<string>();

  const onImageLibraryPress = () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 256,
      maxWidth: 256,
    };
    launchImageLibrary(options as CameraOptions, () => {}).then(
      (photoData: ImagePickerResponse) => {
        if (photoData.assets) {
          const newPhoto = photoData.assets[0].uri;
          setNewImage(newPhoto);
        }
      },
    );
  };

  const onCameraPress = async () => {
    console.log('onCameraPress');
  };

  const onCancel = async () => {
    dispatch(setModalType({ modalType: '', modalData: null }));
  };

  const onLoadImageToFirebase = async () => {
    if (newImage) {
      dispatch(userLoadAvatar({ newUserAvatar: newImage }));
    }
  };

  return (
    <SafeAreaView style={styles.imagePickerModalContainer}>
      <View style={styles.imagesControllersButton}>
        <TouchableButton
          buttonText="Library"
          handleSubmit={onImageLibraryPress}
          isButtonDisableStatus={false}
          type={'multipleButtons'}
        />
        <TouchableButton
          buttonText="Camera"
          handleSubmit={onCameraPress}
          isButtonDisableStatus={false}
          type={'multipleButtons'}
        />
      </View>

      <TouchableButton
        buttonText="Cancel"
        handleSubmit={onCancel}
        isButtonDisableStatus={false}
        type={'multipleButtons'}
      />

      {newImage?.length && (
        <View>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: newImage,
            }}
          />
          <TouchableButton
            buttonText={avatarLoader ? 'Process ... wait' : 'Upload new avatar'}
            handleSubmit={onLoadImageToFirebase}
            isButtonDisableStatus={avatarLoader}
            type={'singleBtn'}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imagePickerModalContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderWidth: 1,
    width: '100%',
    borderTopColor: '#FFFFFF',
    borderLeftColor: '#FFFFFF',
    borderRightColor: '#FFFFFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 0,
  },
  imagesControllersButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
