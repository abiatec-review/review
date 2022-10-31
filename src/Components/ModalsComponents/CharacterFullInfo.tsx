import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {setModalType} from '../../redux/actions/modal';
import Table from '../TableCustom/Table';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const CharacterFullInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    ModalReducer: {modalData},
  } = useSelector((ModalReducer: any) => ModalReducer);
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <Text style={styles.characterName}>{modalData.name}</Text>
          <Pressable
            style={styles.buttonClose}
            onPress={() =>
              dispatch(setModalType({modalType: '', modalData: null}))
            }>
            <Text>X</Text>
          </Pressable>
        </View>
        <View>
          <Image style={styles.imageStyle} source={{uri: modalData.image}} />
        </View>
        <View style={styles.tableContainer}>
          <Table objectParse={modalData} navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    height: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    width: '90%',
    height: 'auto',
    alignItems: 'center',
    shadowColor: '#000',
  },
  buttonClose: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    // backgroundColor: "#2196F3",
  },
  modalHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  characterName: {
    width: '90%',
    textAlign: 'center',
    fontSize: 25,
    paddingLeft: 35,
  },
  imageStyle: {
    width: 160,
    height: 160,
    borderRadius: 100,
  },
  tableContainer: {
    width: '75%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CharacterFullInfo;
