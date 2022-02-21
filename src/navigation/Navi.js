import React from 'react';

import {NavigationContainer, StackActions} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Product from '../screens/Product';
import ProductDetails from '../screens/ProductDetails';
import ProductCategories from '../screens/ProductCategories';
import CategoryList from '../screens/CategoryList';

const Stack = createNativeStackNavigator();

const Navi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Product"
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
        name="ProductDetails"
         component={ProductDetails}
         options={{
             headerShown: false,
         }}  />

        
         <Stack.Screen 
        name="CategoryList"
         component={CategoryList}
         options={{
             headerShown: false,
         }}  /> 

         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navi;
