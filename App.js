/* eslint-disable */
import React from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, Button } from 'react-native'
import LoadingScreen from './screens/LoadingScreen'

export default function App(navigation) {
  return (
    <View style={styles.container}>
      <LoadingScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


