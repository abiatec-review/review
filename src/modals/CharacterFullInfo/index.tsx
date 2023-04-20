import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { setModalType } from '../../redux/modals/actions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Table, TouchableButton } from '@components/index';
import { putFaireBaseData } from '../../redux/userDataFromFirebase/actions';
import { useAppSelector } from '../../hooks/useAppSelector';

export const CharacterFullInfo = () => {
  const dispatch = useDispatch();
  const { modalData } = useAppSelector(store => store.ModalReducer);
  const {
    faireBaseData: { favoriteChars },
    loader,
  } = useAppSelector(store => store.UserFaireBaseData);
  const { uid } = useAppSelector(store => store.Authentication);

  const isCharInFavorites = (characterId: number | undefined) => {
    return favoriteChars.some(({ charId }) => characterId === charId);
  };

  const addToFavorite = (characterId: number | undefined) => {
    if (isCharInFavorites(characterId)) {
      const newFavorites = favoriteChars.filter(
        item => item.charId !== characterId,
      );
      const newDataForFB = {
        additionalData: '',
        favoriteChars: newFavorites.length ? newFavorites : [''],
      };
      dispatch(putFaireBaseData({ newDataForFB, uid }));
    } else {
      const newFavorites = favoriteChars
        ? [...favoriteChars, { charId: characterId }]
        : [{ charId: characterId }];
      console.log(112, newFavorites);

      const newDataForFB = {
        additionalData: '',
        favoriteChars: [...favoriteChars, { charId: characterId }],
      };
      console.log(1111, favoriteChars);
      dispatch(putFaireBaseData({ uid, newDataForFB }));
    }
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <Text style={styles.characterName}>{modalData?.name}</Text>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => {
              dispatch(setModalType({ modalType: '', modalData: null }));
            }}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image style={styles.imageStyle} source={{ uri: modalData?.image }} />
        </View>
        <View style={styles.tableContainer}>
          <Table objectParse={modalData} />
        </View>
        <TouchableButton
          buttonText={
            isCharInFavorites(modalData?.id)
              ? 'Remove from favorites'
              : 'Add to favorite'
          }
          handleSubmit={() => addToFavorite(modalData?.id)}
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
