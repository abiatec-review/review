import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScreenProps } from 'src/types/types';
import { helper } from './helper';

const EpisodesList = ({ route, navigation }: ScreenProps<'episodesList'>) => {
  const { episodes } = route.params;

  const episodesArr = episodes.map((item: string) => {
    return {
      id: item.split('/').slice(-1)[0],
      episodeNum: item.split('/').slice(-1)[0],
      episodeLink: item,
      gif: helper.randomGif(),
    };
  });

  const renderItem = ({
    item,
  }: {
    item: { id: string; episodeNum?: string; episodeLink: string; gif: string };
  }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('charactersFromEpisode', {
          urlForGetCharactersFromSelectedEpisode: item.episodeLink,
          episodeNum: item.episodeNum,
        });
      }}>
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: item.gif }}
          style={{ width: 150, height: 150, borderRadius: 100 }}
        />
        <View>
          <Text>Heroes from {item.episodeNum}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainScreenContainer}>
      <FlatList
        numColumns={2}
        style={styles.episodesItem}
        data={episodesArr}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texst: {
    color: 'red',
  },
  episodesItem: {},
  itemContainer: {
    width: 175,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'rgba(151,216,237, 0.4)',
    borderRadius: 20,
    padding: 10,
  },
  imageStyle: {
    width: 160,
    height: 160,
    borderRadius: 100,
  },
  text: {
    maxWidth: 120,
    textAlign: 'center',
  },
});

export default EpisodesList;
