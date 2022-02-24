import { Pressable, StyleSheet, Text, View, Image, Alert } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../atom/button/Button';

const ProductsCard = ({navigation, item}) => {
  const handleButtonPress = () => {
    navigation.navigate('ProductDetails', {
      id: item.id,
  });
}
const handleButtonAlert = () => {
  Alert.alert(
    "ADDED TO CART"
  );
}
  return (
    <View style={styles.Container2}>
    <Pressable
      onPress={() =>
        navigation.navigate('ProductDetails', {
          id: item.id,
        })
      }>
      <Image
        resizeMode={'center'}
        style={styles.img}
        source={{uri: item.image}}
      />
    </Pressable>

    <Pressable
      onPress={() =>
        navigation.navigate('ProductDetails', {
          id: item.id,
        })
      }>
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
    </Pressable>

    <Pressable
      onPress={() =>
        navigation.navigate('ProductDetails', {
          id: item.id,
        })
      }>
      <Text numberOfLines={3} style={styles.desc}>
        {item.description}
      </Text>
    </Pressable>
   
   <Button text="ADD TO CART" onPress={handleButtonAlert} />
  </View>
  )
}

export default ProductsCard

const styles = EStyleSheet.create({
    Container2: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '$lightDark',
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        borderRadius: 10,
        paddingTop: 20,
    },
    img: {
      width: 140,
      height: 140,
      marginBottom: 10,
      borderRadius: 10,
    },
    title: {
      fontWeight: 'bold',
      marginBottom: 6,
      fontSize: 16,
      color: 'extraDark',
    },
    desc: {
      color: '$Dark',
      marginBottom: 6,
      fontSize: 13,
    },
    viewBttn: {
      padding: 10,
      backgroundColor: '$extraDark',
      borderRadius: 10,
      width: '100%',
      marginVertical: 10,
    },
    viewDetails: {
      color: '$light',
      textAlign: 'center',
      fontWeight: 'bold'
    },
   
   
    
})