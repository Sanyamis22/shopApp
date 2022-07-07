import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('./../assets/bag.png')}
      />
      <Text style={styles.txt}  > Shopping </Text>
    </View>
  )
}

export default Splash

const styles = EStyleSheet.create({
    img : {
        height : 300,
        width : 300,
        alignSelf : 'center',
        
        //margin : 50,
        marginTop: 200

    },
    container : {
        flex : 1,
        backgroundColor : '$White',
        flexdirection : 'column',
        flexDirection: "column",
    },
    txt :{
        fontSize: 50,
        color : '$Black',
        alignSelf : 'center',
        marginTop : 2,

    }
})