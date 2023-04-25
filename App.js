import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import Welcome from './screens/Welcome';

export default function App() {

const [isLoading, setIsLoading] = useState();

setTimeout(() => {
  setIsLoading(true);
}, 2000);

  return (
    <NavigationContainer>
    {/* {isLoading ? <MyStack/> : <Welcome/>} */}
      <MyStack/>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
