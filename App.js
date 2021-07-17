/* eslint-disable */
import React, { useState } from 'react'
import { StyleSheet, View, Button, Alert, } from 'react-native'
import GameScreen from './screens/GameScreen';
import LoadingScreen from './screens/LoadingScreen'
import 'react-native-gesture-handler';


export default function App() {

  return (
    <View style={styles.container}  >
      <LoadingScreen />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ttt: {
    color: 'black',
    fontSize: 50,
    position: 'absolute'
  },


})


