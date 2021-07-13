/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameScreen = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    return (
        <View style={styles.container}>
            <Text>{time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
export default GameScreen;