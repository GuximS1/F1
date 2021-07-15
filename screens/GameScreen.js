/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const GameScreen = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/redbackground.jpg')} resizeMode="cover" style={styles.image} />
            <Image source={require('../assets/no1.png')} style={styles.img} />
            <Text>0</Text>
            <Button title="Press To Start" />
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
        position: 'absolute'
    },
    img: {
        resizeMode: 'contain',
        width: 900,
        marginLeft: 50,
    },

})
export default GameScreen;