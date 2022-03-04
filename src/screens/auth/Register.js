import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

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
  return (
    <View style={styles.container}>
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
            console.log(values);
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
                  style={styles.inputcontainer}
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
                  style={styles.inputcontainer}
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
                  style={styles.inputcontainer}
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
                  style={styles.inputcontainer}
                  placeholder="********"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <Text style={styles.error}>{errors.confirmPassword}</Text>
                ) : null}
              </View>

              <Button title="Submit" color="maroon" onPress={handleSubmit} />
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
    marginBottom: 50,
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
});
