/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import MyStopwatch from './MyStopwatch';

const GameScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/redbackground.jpg')} resizeMode="cover" style={styles.image} />
            <View style={styles.stopwatch}>
                <MyStopwatch />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, image: {
        flex: 1,
        justifyContent: "center",
        position: 'absolute',
    },
    time: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        paddingTop: 540,
    },
    btn: {
        paddingBottom: 50,
        width: 300,
    },
    bestTime: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    timing: {
        position: 'absolute',
        paddingBottom: 660,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stopwatch: {
        paddingTop: 130,
    }
})
export default GameScreen;