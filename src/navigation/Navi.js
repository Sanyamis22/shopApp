import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Product from '../screens/Product';
import ProductDetails from '../screens/ProductDetails';
//import ProductCategories from '../screens/ProductCategories';
import CategoryList from '../screens/CategoryList';
import Login1 from '../screens/auth/Login1';
import Register from '../screens/auth/Register';
import Profile from '../screens/auth/Profile';
import AddtoCart from '../screens/AddtoCart';
import Favorite from '../screens/Favorite';
//import Forgot_password from '../screens/auth/Forgot_password';

const Stack = createNativeStackNavigator();

const Navi = () => {
  const {isLogin} = useSelector(state => state.Auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login1"
        screenOptions={{headerTitleAlign: 'center'}}>
        {isLogin ? (
          <>
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
              }}
            />

            <Stack.Screen
              name="CategoryList"
              component={CategoryList}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Favorite"
              component={Favorite}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="AddtoCart"
              component={AddtoCart}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navi;
