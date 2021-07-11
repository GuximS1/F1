/* eslint-disable */
import React from 'react'
import { StyleSheet, View, Image, Text, ImageBackground, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/66.jpg')} resizeMode="cover" style={styles.image} />
      <Text style={styles.title}> F1 Reaction</Text>
      <View style={styles.big}>
        <Image source={require('./assets/no1.png')} style={styles.img} />
      </View>
      <View style={styles.button}>
        <Button title="Start Game" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    flexDirection: 'column',
    flex: 1,
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 600,
    paddingRight: 10,
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: { width: -3, height: 2 },
    textShadowRadius: 10
  },
  img: {
    resizeMode: 'contain',
    width: 900,
  },
  big: {
    maxWidth: '10%',
    paddingRight: 850,
    marginTop: 150,
  },
  button: {
    width: 200,
    marginBottom: 200,
    borderWidth: 2,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    position: 'absolute'
  }
})
