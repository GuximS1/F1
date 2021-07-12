/* eslint-disable */
import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

const LoadingScreen = (props) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/66.jpg')} resizeMode="cover" style={styles.image} />
            <Text style={styles.title}> F1 Reaction</Text>
            <View style={styles.big}>
                <Image source={require('../assets/no1.png')} style={styles.img} />
            </View>
        </View>
    );
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
        paddingBottom: 530,
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
    },
    image: {
        flex: 1,
        justifyContent: "center",
        position: 'absolute'
    }

    //<Image source={require('../assets/66.jpg')} style={styles.image} />
})

export default LoadingScreen;