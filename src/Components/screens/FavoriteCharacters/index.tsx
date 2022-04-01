import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FavoriteCharacters = () => {
  return (
    <View style={styles.mainScreenContainer}>
      <Text>Favorite Characters</Text>
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

export default FavoriteCharacters;
