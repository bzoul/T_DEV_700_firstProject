import React from 'react'
import {Text, TextInput, View ,Button, StyleSheet } from 'react-native'

const logIn = () => {
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
        <Button style= {styles.button_log} title="register" />
      </View>
       );
    }

const styles = StyleSheet.create ({
    main_container: {
        height: 100,
        marginTop: 150,
        marginLeft: 30,
        marginRight: 30,
        alignContent:"center"
    },
    input_text: {
        flex: 2
    },
    button_log: {
        height: 20,
        width: 50
    }
})
export default logIn;