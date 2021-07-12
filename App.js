/* eslint-disable */
import React, { useState } from 'react'
import { StyleSheet, View, Button, } from 'react-native'
import LoadingScreen from './screens/LoadingScreen'

export default function App() {

  const [isAvailable, setIsAvailable] = useState(true);
  const availableHandler = () => {
    setIsAvailable(false);
  }
  const Hello = <View style={styles.button}><Button title="Start Game" onPress={() => availableHandler()} /></View>;
  return (
    <View style={styles.container}>
      {isAvailable && <LoadingScreen />}
      {isAvailable && Hello}
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
  button: {
    width: 450,
    justifyContent: 'center',
    borderWidth: 2,
    maxWidth: '100%',
  },

})


