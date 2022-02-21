import React from 'react';
import Product from './src/screens/Product';
import {Provider} from 'react-redux';
import store from './src/store';
import Navi from './src/navigation/Navi';
import ProductCategories from './src/screens/ProductCategories'

const App = () => {
  return (
    <Provider store={store}>
      <Navi />
    </Provider>
  );
};

export default App;
