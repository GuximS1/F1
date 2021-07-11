import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> F1 Reaction</Text>
      <View style={styles.big}>
        <Image source={require('./assets/imageedit_11_9865605316.png')} style={styles.img} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    position: 'absolute',
    flex: 1,
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 300,
    paddingRight: 10,
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10
  },
  img: {
    resizeMode: 'center'

  }
})
