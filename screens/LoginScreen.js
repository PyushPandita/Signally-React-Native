import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Input } from 'react-native-elements';
import { authentication } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, [])

const signIn = () => {
  signInWithEmailAndPassword(authentication, email, password)
  .catch((error) => alert(error));
}

const goToRegister = () => {
  navigation.navigate('Register')
}

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style='light'/>
      <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/150px-Signal-Logo.svg.png"}}
        style={{width: 150, height: 150, borderRadius: 20,}}
      />

      <View style={styles.inputContainer}>
        <Input 
          placeholder='Email' 
          autoFocus 
          type = 'email' 
          value={email}
          onChangeText={(userData) => {setEmail(userData)}} 
        />

        <Input 
          placeholder='Password' 
          secureTextEntry 
          type = 'password'
          value={password}
          onChangeText={(userData) => {setPassword(userData)}}
        />
      </View>

        <Button 
          raised 
          containerStyle={styles.button} 
          onPress={signIn} 
          title='Login'/>

        <Button 
          raised 
          containerStyle={styles.button} 
          onPress={goToRegister} 
          type='outline' 
          title='Register'/>
        {/* <View style={{height: 100}}/> */}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 5,
    backgroundColor: '#fff',
  },

  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
    // borderRadius: 10,
  },
});

export default LoginScreen

