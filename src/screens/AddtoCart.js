import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddtoCart = () => {
  return (
    <View>
      <Text style={styles.header}> Cart </Text>
    </View>
  )
}

export default AddtoCart

const styles = StyleSheet.create({
  header: {
        fontSize: 40,
        color: 'black',
        textAlign : 'center'
      },
})