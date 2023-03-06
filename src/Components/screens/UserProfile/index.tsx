import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logOutUser} from '../../../redux/actions/authentification';
import {setModalType} from '../../../redux/actions/modal';
import CustomImage from '../../ImageComponent';

const UserProfile = () => {
  const {
    Authentification: {userEmail, userName},
  } = useSelector((Authentification: any) => Authentification);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutUser());
  };

  const loadUserAvatar = () => {
    dispatch(setModalType({modalType: 'loadAvatar', modalData: null}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainScreenContainer}>
          <View style={styles.mainUserDataContainer}>
            <CustomImage
              imageBorderRadius={50}
              isButtonNeed={true}
              buttonText={'+'}
              handleOnPressInImage={loadUserAvatar}
            />
            <View style={styles.userDataBlock}>
              <Text style={styles.userDataBlockText}>{userEmail}</Text>
              <Text style={styles.userDataBlockText}>{userName}</Text>
            </View>
            <TouchableOpacity style={styles.logOutButton} onPress={logOut}>
              <Text style={styles.userDataBlockText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  logOutButton: {
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 25,
    paddingVertical: 4,
    borderRadius: 4,
  },
  userDataBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    // paddingBottom: 10,
  },
  userDataBlockText: {
    color: '#FFFFFF',
  },
  mainScreenContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  mainUserDataContainer: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    borderColor: '#FFFFFF',
    height: 'auto',
    borderRadius: 15,
    borderWidth: 1,
  },
});

export default UserProfile;
