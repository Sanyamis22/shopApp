import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import { Logout } from '../../redux/actions/authAction';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../../components/atom/button/Button';

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
      <View style={styles.textcontainer}>
      <Text style={styles.bottom}>  Name : {userDetails.name} </Text>
      <Text style={styles.bottom}> E-mail : {userDetails.email}  </Text>
      </View>
       
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

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$light',
    flex: 1,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
    color: '$extraDark',
  },
  img: {
    alignSelf: 'center',
    marginTop: 100,
    borderRadius: 100,
    borderWidth: 1,
    height : 170,
    width : 170,
    // borderColor: 'black',
  },
  bottom: {
    fontSize: 25,
   // fontWeight: 'bold',
    textAlign: 'center',
    //marginTop: 110,
    color: '$extraDark',
    alignSelf: 'center',
    //marginTop : 10
  },
  exit: {
    paddingHorizontal: 40,
    color: 'red',
  },
  logoutbtn: {
    width: '60%',
    borderRadius: 15,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 100,
    backgroundColor: '$extraDark',
  },
  logoutstyle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  
  },
  textcontainer : {
    marginTop : 50,
    //backgroundColor : '$lightDark',
    flex: 0.4,
    fontSize : 20
    
  }
});
