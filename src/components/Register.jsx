import React from 'react'
import {Text, TextInput, View ,Button, StyleSheet } from 'react-native'

const Register = () => {
  
  const goTo = (route) => {
    Actions.push(route);
  }
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.input_text}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.input_text}
          placeholder="User Name"
        />
        <TextInput
          style={styles.input_text}
          placeholder="Password"
        />
        <Button style= {styles.button_log} title="register" onPress={() => goTo('login')}/>
      </View>
       );
    }

const styles = StyleSheet.create ({
    main_container: {
        height: 100,
        marginTop: 250,
        marginLeft: 30,
        marginRight: 30,
        alignContent:"center"
    },
    input_text: {
        height:50,
        fontSize: 20,
        margin:2
    },
    button_log: {
        height: 20,
        width: 50
    }
})
export default Register;