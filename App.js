/* eslint-disable */
import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, Button } from 'react-native'
import LoadingScreen from './screens/LoadingScreen'

export default function App() {


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


