import React, { useState } from 'react'
import {Text, TextInput, View ,Button, StyleSheet } from 'react-native'

const LoginComponent = () => {
    const [text, setText] = useState('');

    const goTo = (route) => {
      Actions.push(route);
    }

    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.input_text}
          placeholder="User Name"
          defaultValue={text}
        />
        <TextInput
          style={styles.input_text}
          placeholder="Password"
          defaultValue={text}
        />
        <Button title="LOG IN" styles= {styles.button_log} onPress={() => goTo('register')}/>
        <Text style={styles.register}> create your account </Text>
        <Button style= {styles.button_log} title="register" />
      </View>
    );
}


const styles = StyleSheet.create ({
    main_container: {
        height: 100,
        marginTop: 250,
        marginLeft: 30,
        marginRight: 30
    },
    input_text: {
        height: 30,
        fontSize: 20
    },
    button_log: {
        height: 20,
        width: 50
    },
    register: {
      textAlign:'center'
    }
})
export default LoginComponent;