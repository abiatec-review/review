import React from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNextCharatersSucsess} from '../../../redux/actions/characters';
import CharactersInfoBlock from '../../Items/CharactersBlock';
import {Characters} from '../../../types/types';
import {setModalType} from '../../../redux/actions/modal';
import Table from '../../TableCustom/Table';

const MainScreen = ({navigation}: any) => {
  const {
    CharactersReducer: {characters, nextCharactersPage, charactersLoader},
  } = useSelector((CharactersReducer: any) => CharactersReducer);
  // const {
  //   ModalReducer: {modalType, modalData},
  // } = useSelector((ModalReducer: any) => ModalReducer);
  const dispatch = useDispatch();

  const renderItem = ({item}: {item: Characters}) => (
    <TouchableOpacity
      onPress={() => {
        dispatch(
          setModalType({modalType: 'characterFullInfo', modalData: item}),
        );
      }}>
      <CharactersInfoBlock name={item.name} id={item.id} image={item.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainScreenContainer}>
      {/*{modalType ? (*/}
      {/*  <Modal transparent={true} style={{zIndex: -1}}>*/}
      {/*    <View style={styles.centeredView}>*/}
      {/*      <View style={styles.modalView}>*/}
      {/*        <View style={styles.modalHeader}>*/}
      {/*          <Text style={styles.characterName}>{modalData.name}</Text>*/}
      {/*          <Pressable*/}
      {/*            style={styles.buttonClose}*/}
      {/*            onPress={() =>*/}
      {/*              dispatch(setModalType({modalType: '', modalData: null}))*/}
      {/*            }>*/}
      {/*            <Text>X</Text>*/}
      {/*          </Pressable>*/}
      {/*        </View>*/}
      {/*        <View>*/}
      {/*          <Image*/}
      {/*            style={styles.imageStyle}*/}
      {/*            source={{uri: modalData.image}}*/}
      {/*          />*/}
      {/*        </View>*/}
      {/*        <View style={styles.tableContainer}>*/}
      {/*          <Table objectParse={modalData} navigation={navigation} />*/}
      {/*        </View>*/}
      {/*      </View>*/}
      {/*    </View>*/}
      {/*  </Modal>*/}
      {/*) : null}*/}

      <FlatList
        ListFooterComponent={charactersLoader ? <Text>Loading</Text> : null}
        onEndReached={() => {
          if (charactersLoader) {
            dispatch(getNextCharatersSucsess({nextCharactersPage}));
          }
        }}
        numColumns={2}
        style={styles.flatListContainer}
        data={characters}
        renderItem={renderItem}>
        keyExtractor={(item: Characters) => item.id}
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  flatListContainer: {
    flex: 1,
    alignContent: 'space-around',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default MainScreen;
