import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,

} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {RegisterUser} from '../../redux/actions/authAction';
import {useDispatch, useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useEffect} from 'react';
import Button from '../../components/atom/button/Button';

import {useState} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {ActionTypes} from '../../redux/constants/productConstants';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email('Invalid email').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!'),
  confirmPassword: Yup.string()
    .required('Please retype your password.')
    .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
});

const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const {isRegistered} = useSelector(state => state.Auth);

  const register = value => {
    console.log('register=>', value);
    dispatch(RegisterUser(value));
  };

  const handleModalOkPress = () => {
    navigation.navigate('Login1');
    dispatch({type: ActionTypes.RESET_REGISER_STATE});
  };

  return (
    <View style={styles.container}>
      {isRegistered ? (
        <>
          <Modal transparent={true}
            visible={true}>
            <View style={styles.popup}>
              <Text style={styles.popup_txt}>
                {' '}
                Congratulations! You have successfully Registered.Please Login 
              </Text>
              
              <TouchableOpacity>
                <View>
                  <Text onPress={handleModalOkPress} style={styles.popup_btn}>
                    {' '}
                    OK{' '}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </>
      ) : 
         null 
      }
        
          <Text style={styles.heading}> REGISTER </Text>

          <View style={styles.bodycontainer}>
            <Formik
              style={styles.formik}
              initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                register(values);
              }}>
              {({
                handleChange,
                handleSubmit,
                values,
                handleBlur,
                errors,
                touched,
              }) => (
                <View>
                  <View style={styles.inputcontainer}>
                    <Image
                      style={styles.msgbox}
                      source={require('./../../assets/email_2.png')}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Enter Name"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    {errors.name && touched.name ? (
                      <Text style={styles.error}>{errors.name}</Text>
                    ) : null}
                  </View>

                  <View style={styles.inputcontainer}>
                    <Image
                      style={styles.msgbox}
                      source={require('./../../assets/email_2.png')}
                    />

                    <TextInput
                      style={styles.input}
                      placeholder="E-mail"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <Text style={styles.error}>{errors.email}</Text>
                    ) : null}
                  </View>

                  <View style={styles.inputcontainer}>
                    <Image
                      style={styles.msgbox}
                      source={require('./../../assets/email_2.png')}
                    />

                    <TextInput
                      style={styles.input}
                      placeholder="********"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    {errors.password && touched.password ? (
                      <Text style={styles.error}>{errors.password}</Text>
                    ) : null}
                  </View>

                  <View style={styles.inputcontainer}>
                    <Image
                      style={styles.msgbox}
                      source={require('./../../assets/email_2.png')}
                    />

                    <TextInput
                      style={styles.input}
                      placeholder="********"
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <Text style={styles.error}>{errors.confirmPassword}</Text>
                    ) : null}
                  </View>

                  <Button text="SUBMIT" color="maroon" onPress={handleSubmit} />
                </View>
              )}
            </Formik>
            

            <TouchableOpacity onPress={() => navigation.navigate('Login1')}>
              <Image
                style={styles.tinyLogo}
                source={require('./../../assets/next_1.png')}
              />
            </TouchableOpacity>
            <Text style={styles.bottom}>
              {' '}
              Already have an account?{' '}
              <Text
                onPress={() => navigation.navigate('Login1')}
                style={styles.bold}>
                Login
              </Text>{' '}
              here{' '}
            </Text>
          </View>
        
      
    </View>
  );
};

export default Register;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$light',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
    color: '$extraDark',
  },
  bodycontainer: {
    flex: 0.9,
    backgroundColor: '$lightDark',
    marginTop: 'auto',
    marginBottom: 50,
    marginHorizontal: 30,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputcontainer: {
    backgroundColor: '$light',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 20,
  },
  msgbox: {
    marginRight: 10,
    height: 40,
    width: 40,
  },
  input: {
    height: 50,
    color: 'black',
  },
  tinyLogo: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  bottom: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 10,
    color: '$extraDark',
  },
  formik: {
    marginTop: 50,
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    marginHorizontal: 12,
    textAlign: 'right',
  },
  modalsyle: {
    backgroundColor: 'white',
    height: 100,
    width: 300,
  },
  modalButton: {},
  popup: {
    flex : 0.15,
    backgroundColor: '$White',
    marginTop: 130,
    //opacity: 0.7,
    margin: 10,
    borderRadius: 10,
    height : 100,
    width : 300,
    justifyContent : 'center',
    marginLeft : 50
  },
  popup_txt: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: '$extraDark',
    textAlign: 'center',
  },
  popup_btn: {
    textAlign: 'center',
    color: '$White',
    fontWeight: 'bold',
    fontSize: 10,
    padding: 10,
    marginHorizontal: 120,
    //marginBottom: 20,
    borderRadius: 40,
    backgroundColor: '$extraDark',
  },
});
