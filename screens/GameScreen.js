/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const GameScreen = () => {
    const [isOn1, setIsOn1] = useState(0);
    const [isAvailable1, setIsAvailable1] = useState(true);
    const [myTitle, setMyTitle] = useState("PRESS TO START");
    const availableHandler1 = () => {
        setIsAvailable(false);
    }
    const Hello = <View style={styles.button}><Button title="Start Game" onPress={() => availableHandler()} /></View>;
    const message1 = () => {
        setMyTitle("LIGHTS OUT");
        setIsOn1(isOn1 + 1);
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/redbackground.jpg')} resizeMode="cover" style={styles.image} />
            <View style={styles.timing}><Text style={styles.bestTime}>Best Time</Text></View>
            <View style={styles.big}>
                <Image source={require('../assets/no1.png')} style={styles.img} />
                {isOn1 == 1 && <Image source={require('../assets/b1.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                {isOn1 == 2 && <Image source={require('../assets/b2.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                {isOn1 == 3 && <Image source={require('../assets/b3.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                {isOn1 == 4 && <Image source={require('../assets/b4.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                {isOn1 == 5 && <Image source={require('../assets/b5.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
            </View>
            <Text style={styles.time}>0.00 ms</Text>
            <View style={styles.btn}>
                <Button title={myTitle} onPress={() => { setTimeout(message1, 0); }} />
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
    img: {
        resizeMode: 'contain',
        width: 900,
        marginLeft: 50,
        marginTop: 40,
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
    balls: {
        position: 'absolute',
        width: 831,
        height: 511,
        marginLeft: 84.6,
        marginTop: 120,

    },
    bestTime: {
        color: 'white',
        fontSize: 30,
    },
    timing: {
        position: 'absolute',
        paddingBottom: 660,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    }

})
export default GameScreen;