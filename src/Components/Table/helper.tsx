import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { OpenURLButton } from '..';

export const helper = {
  typeIdentifier: (
    value: number | string | { name: string; url: string } | string[],
    onNavigate: (
      screenName: 'charactersFrom' | 'episodesList',
      props: { episodes: string[] } | { name: string; url: string },
    ) => void,
  ) => {
    switch (typeof value) {
      case 'string': {
        if (!isNaN(Date.parse(value)) && !value.includes('http')) {
          return <Text>{moment(value, 'YYYYMMDD').fromNow()}</Text>;
        } else if (value.includes('http')) {
          return <OpenURLButton url={value} text={'Link'} />;
        } else {
          return <Text>{value}</Text>;
        }
      }
      case 'number': {
        return <Text>{value}</Text>;
      }
      case 'object': {
        if (Array.isArray(value)) {
          return (
            <TouchableOpacity
              onPress={() => onNavigate('episodesList', { episodes: value })}>
              <Text style={{ color: 'blue' }}>Episodes list</Text>
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            onPress={() => {
              return onNavigate('charactersFrom', value);
            }}>
            <Text style={{ color: 'blue' }}>{value.name}</Text>
          </TouchableOpacity>
        );
      }
      default:
        return <Text>Type is not valid</Text>;
    }
  },
};
