import React from 'react';
import { Provider } from 'react-redux';

import NavigationComponent from './screens/Navigation/NavigationComponent';
import {
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { store } from './redux/store';
export const navigationRef = createNavigationContainerRef();

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <NavigationComponent />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
