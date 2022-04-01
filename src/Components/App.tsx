import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../redux/store';
import MainScreen from './screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteCharacters from './screens/FavoriteCharacters';
import {Image} from 'react-native';

const store = configureStore();

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}: any) => ({
            tabBarIcon: () => {
              if (route.name === 'Home') {
                return (
                  <Image
                    style={{width: 25, height: 25}}
                    source={require('../assets/images/icons/green_portal.png')}
                  />
                );
              } else if (route.name === 'Settings') {
                return (
                  <Image
                    source={require('../assets/images/icons/green_portal.png')}
                  />
                );
              }
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="Home"
            component={MainScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen
            name="FavoriteCharaters"
            component={FavoriteCharacters}
            options={{title: 'Favorite Charaters'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
