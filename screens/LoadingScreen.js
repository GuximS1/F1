/* eslint-disable */
import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, Alert, Button, BackHandler, Modal } from 'react-native'
import AlertComponent from './AlertComponent';
import GameScreen from './GameScreen';


const LoadingScreen = (props) => {
    const [isAvailable, setIsAvailable] = useState(true);
    const [instr, setInstr] = useState(false);
    const availableHandler = () => {
        setIsAvailable(false);
    }
    const backAction = () => {
        Alert.alert("Quit!", "Are you sure you want to quit the game?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };
    const gameInstructions = () => {
        setInstr(true);
    }


    const Hello = <View style={styles.button}><Button title="Start Game" color="green" onPress={() => availableHandler()} /></View>;
    const Instructions = <View style={styles.instructions}><Button title="Instructions" onPress={() => gameInstructions()} /></View>;
    const Quit = <View style={styles.quit}><Button title="Quit" color='red' onPress={() => backAction()} /></View>;
    if (isAvailable) {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/66.jpg')} resizeMode="cover" style={styles.image} />
                <Text style={styles.title}> F1 Reaction</Text>
                <Image source={require('../assets/f1.png')} style={styles.img} />
                <View style={styles.myLightsOut}>
                    <Image source={require('../assets/rsz_rf1.png')} style={styles.rf1} />
                    <Image source={require('../assets/rsz_rf2.png')} style={styles.rf} />
                </View>
                {Hello}
                {Instructions}
                {instr && <AlertComponent />}
                {Quit}
            </View>
        );
    }
    else {
        return (<GameScreen />)
    }
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
        paddingBottom: 580,
        paddingRight: 10,
        color: 'red',
        textShadowColor: 'black',
        textShadowOffset: { width: -3, height: 2 },
        textShadowRadius: 10
    },
    img: {
        resizeMode: 'contain',
        width: 900,
        height: 480,
        position: 'absolute',
    },
    big: {
        maxWidth: '10%',
        paddingRight: 850,
        position: 'absolute'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        position: 'absolute'
    },
    lightsOut: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 40,
    },
    myLightsOut: {
        position: 'absolute',
        paddingTop: 605,
        flex: 1,
        flexDirection: 'row',
    },
    balls: {
        position: 'absolute',
        width: 831,
        height: 511,
        marginLeft: 34.5,
        marginTop: 80,
    },
    rf: {
        marginTop: 100,
        width: 128,
        marginLeft: 227,
    },
    button: {
        width: 450,
        justifyContent: 'center',
        maxWidth: '50%',
        marginTop: 640,
    },
    rf1: {
        marginTop: 100,
    },
    instructions: {
        width: 230,
        marginTop: 10,
    },
    quit: {
        width: 120,
        marginTop: 10,
        backgroundColor: 'red',
        color: 'red'
    },


})

export default LoadingScreen;