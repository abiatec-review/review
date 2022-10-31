import {Image, StyleSheet, Switch} from 'react-native';
import MainScreen from '../Main';
import FavoriteCharacters from '../FavoriteCharacters';
import React, {useState} from 'react';
import {changeThemeMode} from '../../../redux/actions/characters';
import {useDispatch, useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Home = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();
  const {
    CharactersReducer: {themeMode},
  } = useSelector((CharactersReducer: any) => CharactersReducer);

  const toggleSwitch = () => {
    if (isEnabled) {
      setIsEnabled(prevState => !prevState);
      dispatch(
        changeThemeMode({
          themeMode: 'dark',
        }),
      );
    } else {
      setIsEnabled(prevState => !prevState);
      dispatch(
        changeThemeMode({
          themeMode: 'light',
        }),
      );
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: () => {
          if (route.name === 'LogIn') {
            return (
              <Image
                style={{width: 25, height: 25}}
                source={require('../../../assets/images/icons/green_portal.png')}
              />
            );
          }
          if (route.name === 'Charters') {
            return (
              <Image
                style={{width: 25, height: 25}}
                source={require('../../../assets/images/icons/Characters.png')}
              />
            );
          }
          if (route.name === 'FavoriteCharaters') {
            return (
              <Image
                style={{width: 25, height: 25}}
                source={require('../../../assets/images/icons/favorite.jpeg')}
              />
            );
          }
        },
        headerRight: () => {
          return (
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          );
        },
        tabBarActiveBackgroundColor: 'rgba(151,216,237, 0.4)',
        headerTitleStyle: {
          color: themeMode !== 'light' ? 'white' : 'black',
        },
        headerStyle: {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: themeMode === 'light' ? 'white' : 'black',
        },
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: themeMode === 'light' ? 'white' : 'black',
        },
      })}>
      <Tab.Screen
        name="Charters"
        component={MainScreen}
        options={{
          headerRight: () => (
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          ),
          title: 'Charters',
          tabBarItemStyle: {
            borderTopLeftRadius: 10,
          },
        }}
      />

      <Tab.Screen
        name="FavoriteCharaters"
        component={FavoriteCharacters}
        options={{
          title: 'Favorite Charaters',
        }}
      />
      <Tab.Screen
        name="LogIn"
        component={FavoriteCharacters}
        options={{
          title: 'Log in',
          tabBarItemStyle: {
            borderTopRightRadius: 10,
          },
        }}
      />
    </Tab.Navigator>
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

export default Home;
