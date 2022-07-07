import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const Login = () => {
  const [text, setText] = useState('hello');
  const [text2, setText2] = useState('text');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      <Text style={styles.heading}>{text2}</Text>
      <View>
        <Text style={styles.textsize}>
          Please enter your e-mail address below
        </Text>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.container2}
          placeholder="Enter E-mail Address"></TextInput>

        <Button
          onPress={() => {
            if (text == 'password') {
              setText('email');
            } else {
              setText('password');
            }
          }}
          title="SUBMIT"
          color="black"></Button>

        <Button
          onPress={() => setText2('new')}
          title="NEW"
          color="black"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkcyan',
  },
  heading: {
    fontSize: 50,
    color: 'black',
    textAlign: 'center',
  },
  textsize: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingTop: 50,
  },
  container2: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'lightcyan',
    paddingTop: 20,
  },
});
export default Forgot_password;
