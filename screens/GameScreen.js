/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const GameScreen = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/redbackground.jpg')} resizeMode="cover" style={styles.image} />
            <Text>0</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, image: {
        flex: 1,
        justifyContent: "center",
        position: 'absolute'
    },

})
export default GameScreen;