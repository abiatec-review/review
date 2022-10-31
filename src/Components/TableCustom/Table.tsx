import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {helper} from './helper';
import {useDispatch} from 'react-redux';

type TableTypes = {
  objectParse: object;
  navigation: any;
};

const Table: FC<TableTypes> = ({objectParse, navigation}) => {
  const objToArr = Object.entries(objectParse).map(([key, value]) => ({
    [key]: value,
  }));
  const dispatch = useDispatch();

  const itemCheker = (item: string) => {
    if (item === 'origin') {
      return 'heroes from';
    }
    if (item === 'location') {
      return 'heroes from';
    }
    return item;
  };

  return (
    <View>
      {objToArr.map((item, id) => {
        if (
          Object.values(item)[0] !== '' &&
          Object.keys(item)[0] !== 'url' &&
          Object.values(item)[0].name !== 'unknown' &&
          Object.values(item)[0] !== 'unknown'
        ) {
          return (
            <View key={id} style={styles.itemsInTable}>
              <Text>{itemCheker(Object.keys(item)[0]).toUpperCase()}:</Text>
              {helper.typeIdentifier(
                typeof Object.values(item)[0],
                Object.values(item)[0],
                navigation,
                dispatch,
              )}
            </View>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  itemsInTable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
    zIndex: -1,
  },
});

export default Table;
