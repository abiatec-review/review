import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { setModalType } from '../../redux/actions/modals/actions';
import { OpenURLButton } from '..';
import { Dispatch } from 'redux';

export const helper = {
  typeIdentifier: (
    type: string,
    value: any,
    navigation: any,
    dispatch: Dispatch<{ type: string }>,
  ) => {
    switch (type) {
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
              onPress={() => {
                navigation.navigate('episodesList', { episodes: value });
                dispatch(setModalType({ modalType: '', modalData: null }));
              }}>
              <Text style={{ color: 'blue' }}>Episodes list</Text>
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('charactersFrom', {
                locationName: value.name,
                locationCharactersApi: value.url,
              });
              dispatch(setModalType({ modalType: '', modalData: null }));
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
