import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ImageBackground, Modal, StyleSheet, Switch} from 'react-native';
import {getCharatersSucsess} from '../../../redux/actions/characters';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {helper} from './helper';
import {navigations} from './navigationList';
import {identifyAuthUser} from '../../../redux/actions/authentification';
import ModalController from './ModalConroller';

const NavigationComponent = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();
  const {
    ModalReducer: {modalType},
  } = useSelector((ModalReducer: any) => ModalReducer);
  const {
    CharactersReducer: {themeMode},
  } = useSelector((CharactersReducer: any) => CharactersReducer);

  useEffect(() => {
    dispatch(getCharatersSucsess());
    dispatch(identifyAuthUser());
  }, [dispatch]);

  return (
    <>
      {modalType ? (
        <Modal transparent={true} animationType="fade">
          <ModalController modalType={modalType} />
        </Modal>
      ) : null}
      <ImageBackground
        style={styles.mainScreenContainer}
        source={helper.changeThemeModeHandler(themeMode)}>
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: {
              color: themeMode !== 'light' ? 'white' : 'black',
            },
            headerStyle: {
              backgroundColor: themeMode === 'light' ? 'white' : 'black',
            },
            headerRight: () => {
              return (
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={themeMode === 'light' ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={() => helper.toggleSwitch(themeMode, dispatch)}
                  value={themeMode === 'light'}
                />
              );
            },
          }}>
          {navigations.map((navItem, navId) => (
            <Stack.Screen
              key={navId}
              name={navItem.name}
              component={navItem.component}
              options={navItem.options}
            />
          ))}
        </Stack.Navigator>
      </ImageBackground>
    </>
  );
};

export default NavigationComponent;
const styles = StyleSheet.create({
  mainScreenContainer: {
    height: '100%',
  },
});
