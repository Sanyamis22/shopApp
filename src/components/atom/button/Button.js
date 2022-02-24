import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

const Button = ({text, onPress}) => {
  return (
    <Pressable
      style={styles.viewBttn}
      onPress={onPress}>
      <Text style={styles.viewDetails}> {text} </Text>
    </Pressable>
  )
}

export default Button

const styles = EStyleSheet.create({
    viewBttn: {
        padding: 10,
        backgroundColor: '$extraDark',
        borderRadius: 10,
        width: '100%',
        marginVertical: 10

        
        
      },
      viewDetails: {
        color: '$light',
        textAlign: 'center',
        fontWeight: 'bold'
      },
})