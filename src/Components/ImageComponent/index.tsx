import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface CustomImageProps {
  imageBorderRadius: number;
  isButtonNeed: boolean;
  buttonText: string;
  handleOnPressInImage: (() => void) | null;
  imageUri?: string | null;
  width: number;
  height: number;
}

export const CustomImage = ({
  imageBorderRadius,
  isButtonNeed,
  buttonText,
  handleOnPressInImage,
  imageUri,
  width,
  height,
}: CustomImageProps) => {
  return (
    <View style={styles.imageConatainer}>
      {imageUri ? (
        <Image
          style={{
            ...styles.image,
            borderRadius: imageBorderRadius,
            width,
            height,
          }}
          source={{ uri: imageUri }}
        />
      ) : (
        <Image
          style={{
            ...styles.image,
            borderRadius: imageBorderRadius,
            width,
            height,
          }}
          source={require('@images/icons/noAvatar.jpeg')}
        />
      )}

      {isButtonNeed && handleOnPressInImage && (
        <TouchableOpacity
          style={styles.imageButton}
          onPress={handleOnPressInImage}>
          <Text style={styles.textStyle}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
  },
  imageConatainer: {
    position: 'relative',
    width: 70,
  },
  imageButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    width: 17.5,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    backgroundColor: '#0080FF',
    zIndex: 1,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  textStyle: {
    color: '#ffffff',
    padding: 0,
    margin: 0,
  },
});
