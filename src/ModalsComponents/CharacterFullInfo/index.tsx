import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { setModalType } from '../../redux/actions/modals/actions';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { putFaireBaseData } from '../../redux/actions/userDataFromFirebase/actions';
import { Table, TouchableButton } from '@components/index';

export const CharacterFullInfo = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    ModalReducer: { modalData },
  } = useSelector((ModalReducer: any) => ModalReducer);
  const {
    UserFaireBaseData: { faireBaseData, loader, uniqueId },
  } = useSelector((UserFaireBaseData: any) => UserFaireBaseData);
  const {
    Authentication: { uid },
  } = useSelector((Authentication: any) => Authentication);

  console.log(555, faireBaseData);

  const isCharInFavorites = (characterId: number) => {
    if (uniqueId && Array.isArray(faireBaseData[uniqueId].favoriteChars)) {
      return faireBaseData[uniqueId].favoriteChars.some(
        ({ charId }: { charId: number }) => characterId === charId,
      );
    }
  };

  const addToFavorite = (characterId: number) => {
    if (isCharInFavorites(characterId)) {
      const newFavorites = faireBaseData.filter(
        (item: { charId: number }) => item.charId !== characterId,
      );
      const newDataForFB = {
        additionalData: null,
        favoriteChars: newFavorites,
      };
      dispatch(putFaireBaseData({ newDataForFB, uid }));
    } else {
      const newFavorites = faireBaseData
        ? [...faireBaseData, { charId: characterId }]
        : [{ charId: characterId }];
      const newDataForFB = {
        additionalData: null,
        favoriteChars: [...newFavorites],
      };
      console.log(newDataForFB);
      dispatch(putFaireBaseData({ newDataForFB, uid }));
    }
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <Text style={styles.characterName}>{modalData.name}</Text>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => {
              console.log('test');
              dispatch(setModalType({ modalType: '', modalData: null }));
            }}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image style={styles.imageStyle} source={{ uri: modalData.image }} />
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
    backgroundColor: '#2196F3',
    zIndex: 1000000,
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
