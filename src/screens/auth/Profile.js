import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import { Logout } from '../../redux/actions/authAction';

const Profile = ({navigation}) => {
      const dispatch = useDispatch();
    const {userDetails} = useSelector(state => state.Auth);
    
    const logout = () => {
      dispatch(Logout());
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> PROFILE </Text>
      <Image
        style={styles.img}
        source={require('./../../assets/delivery-boy1.png')}
      />
      <Text style={styles.bottom}>  Name : {userDetails.name} </Text>
      <Text style={styles.bottom}> E-mail : {userDetails.email}  </Text>
       
      <TouchableOpacity style={styles.logoutbtn}>
        <Text
          onPress={() => (logout())}
          style={styles.logoutstyle}>
          LOGOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
    color: '#000',
  },
  img: {
    alignSelf: 'center',
    marginTop: 70,
    borderRadius: 100,
    borderWidth: 1,
    // borderColor: 'black',
  },
  bottom: {
    fontSize: 20,
   // fontWeight: 'bold',
    textAlign: 'center',
    //marginTop: 110,
    color: '#000',
    alignSelf: 'center',
  },
  exit: {
    paddingHorizontal: 40,
    color: 'red',
  },
  logoutbtn: {
    width: '40%',
    borderRadius: 15,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#D62828',
  },
  logoutstyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
