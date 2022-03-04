import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { LoginUser } from '../../redux/actions/authAction';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(3, 'Password is too short!')
    .required('Password is required!'),
});

const Login1 = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLogin, userDetails} = useSelector(state => state.Auth);

  const login = (value) => {
    console.log('login=>',value)
    dispatch(LoginUser(value));
  }
  return (
    <View style={styles.container}>
    {console.log('userDetails=>',userDetails)}
      <Text style={styles.heading}> LOGIN </Text>
      <View style={styles.bodycontainer}>
        <ImageBackground
          style={styles.logo}
          source={require('./../../assets/id-card.png')}
          resizeMode="cover"></ImageBackground>

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={values => {
            login(values);
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
                  placeholder="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
              </View>

              <Button title="Submit" color="maroon" onPress={handleSubmit} />
            </View>
          )}
        </Formik>

        {/* <TouchableOpacity onPress={() => navigation.navigate('Forgot_password')}> */}
        <Text style={styles.word}> forgot password</Text>
        {/* </TouchableOpacity> */}

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.tinyLogo}
            source={require('./../../assets/next_1.png')}
          />
        </TouchableOpacity>
        <Text style={styles.bottom}>
          {' '}
          Already have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.bold}>
            Register
          </Text>{' '}
          here{' '}
        </Text>
      </View>
    </View>
  );
};

export default Login1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
    color: '#000',
  },
  bodycontainer: {
    flex: 0.9,
    backgroundColor: '#E9E9E9',
    marginTop: 'auto',
    marginBottom: 40,
    marginHorizontal: 30,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputcontainer: {
    backgroundColor: '#fff',
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
    color: 'black',
  },
  logo: {
    //position: 'relative',
    height: 170,
    width: 170,
    alignSelf: 'center',
    paddingTop: 5,

    // position: 'absolute',
  },
  word: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: 'black',
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    marginHorizontal: 12,
    textAlign: 'right',
  },
});
