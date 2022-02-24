import React from 'react';
import Product from './src/screens/Product';
import {Appearance} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import Navi from './src/navigation/Navi';
import ProductCategories from './src/screens/ProductCategories';
import EStyleSheet from 'react-native-extended-stylesheet';

const colorScheme = Appearance.getColorScheme();
console.log('colorScheme', colorScheme);
if (colorScheme === 'light') {
  EStyleSheet.build({
    $extraDark: '#2F5D62',
    $Dark: '#5E8B7E',
    //$lightDark: '#333',
    $lightDark: '#A7C4BC',
    $light: '#DFEEEA',
    $Black: '#000000',
    $White : '#FFFFFF',
    $grey: '#999999'
  });
} else {
  EStyleSheet.build({
    $extraDark: '#B4A5A5',
    $Dark: '#3C415C',
    //$lightDark: '#333',
    $lightDark: '#301B3F',
    $light: '#151515',
    $Black: '#000000',
    $White : '#FFFFFF',
    $grey: '#999999'
  });
}

const App = () => {
  return (
    <Provider store={store}>
      <Navi />
    </Provider>
  );
};

export default App;
