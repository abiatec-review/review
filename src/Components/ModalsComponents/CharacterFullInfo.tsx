import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {setModalType} from '../../redux/actions/modal';
import Table from '../TableCustom/Table';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import TouchableButton from '../TouchableButton';
import {putFaireBaseData} from '../../redux/actions/userDataFromFairebase';

const CharacterFullInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    ModalReducer: {modalData},
  } = useSelector((ModalReducer: any) => ModalReducer);
  const {
    UserFaireBaseData: {faireBaseData, loader, uniqueId},
  } = useSelector((UserFaireBaseData: any) => UserFaireBaseData);
  const {
    Authentification: {uid},
  } = useSelector((Authentification: any) => Authentification);

  const isCharInFavorites = (characterId: number) => {
    if (Array.isArray(faireBaseData[uniqueId].favoriteChars)) {
      return faireBaseData[uniqueId].favoriteChars.some(
        ({charId}: {charId: number}) => characterId === charId,
      );
    }
  };

  const addToFavorite = (characterId: number) => {
    if (isCharInFavorites(characterId)) {
      const newFavorites = faireBaseData[uniqueId].favoriteChars.filter(
        (item: {charId: number}) => item.charId !== characterId,
      );
      const newDataForFB = {
        [uniqueId]: {
          additionalData: faireBaseData[uniqueId].additionalData,
          favoriteChars: newFavorites,
        },
      };
      dispatch(putFaireBaseData({newDataForFB, uid}));
    } else {
      const newFavorites = faireBaseData[uniqueId].favoriteChars
        ? [...faireBaseData[uniqueId].favoriteChars, {charId: characterId}]
        : [{charId: characterId}];
      const newDataForFB = {
        [uniqueId]: {
          additionalData: faireBaseData[uniqueId].additionalData,
          favoriteChars: [...newFavorites],
        },
      };
      console.log(newDataForFB);
      dispatch(putFaireBaseData({newDataForFB, uid}));
    }
  };

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
        <TouchableButton
          buttonText={
            isCharInFavorites(modalData.id)
              ? 'Remove from favorites'
              : 'Add to favorite'
          }
          handleSubmit={() => addToFavorite(modalData.id)}
          isButtonDisableStatus={loader}
          type={'singleBtn'}
        />
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
