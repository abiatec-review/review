import { CustomImage, TouchableButton } from '@components/index';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logOutUser } from '../../redux/actions/authentication/actions';
import { setModalType } from '../../redux/actions/modals/actions';

const UserProfile = () => {
  const { userEmail, userName, userAvatar } = useAppSelector(
    store => store.Authentication,
  );
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutUser());
  };

  const loadUserAvatar = () => {
    dispatch(setModalType({ modalType: 'loadAvatar', modalData: null }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainScreenContainer}>
          <View style={styles.mainUserDataContainer}>
            <CustomImage
              imageUri={userAvatar}
              imageBorderRadius={50}
              isButtonNeed={true}
              buttonText={'+'}
              handleOnPressInImage={loadUserAvatar}
              width={70}
              height={70}
            />
            <View style={styles.userDataBlock}>
              <Text style={styles.userDataBlockText}>{userEmail}</Text>
              <Text style={styles.userDataBlockText}>{userName}</Text>
            </View>
            <TouchableButton
              buttonText="Log Out"
              handleSubmit={logOut}
              isButtonDisableStatus={false}
              type={'singleBtn'}
            />
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
