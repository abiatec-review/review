import React, {useCallback} from 'react';
import {Alert, Linking, Pressable, Text} from 'react-native';

const OpenURLButton = ({url, text}: any) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default OpenURLButton;
