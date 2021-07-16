/* eslint-disable */
import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, Alert, Button, BackHandler, Modal } from 'react-native'

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
                <Modal visible={instr}>
                    <View style={styles.mainContainer}>
                        <View style={styles.topPart}>
                            <Image source={require('../assets/library.png')} resizeMode={'contain'} style={styles.alertIconStyle} />
                            <Text style={styles.alertTitleTextStyle}>Game Instructions!</Text>
                        </View>
                        <View style={styles.middlePart}>
                            <Text style={styles.alertMessageTextStyle}>
                                -"Start Game" button loads the game screen.
                            </Text>
                            <Text style={styles.alertMessageTextStyle}>
                                -"Press to Start" button starts the game.
                            </Text>
                            <Text style={styles.alertMessageTextStyle}>
                                -Five red lights need to go out in order for the timer to start.
                            </Text>
                            <Text style={styles.alertMessageTextStyle}>
                                -If you react before the five red lights go out you are disqualified.
                            </Text>
                            <Text style={styles.alertMessageTextStyle}>
                                -In order to react after the five red lights go out, you need to press the "Lights Out" button.
                            </Text>
                            <Text style={styles.alertMessageTextStyle}>
                                -The fastest time reaction that you are going to have is going to show on top of the screen.
                            </Text>
                            <Text style={styles.alertMessageTextStyle}>
                                -If you don't have a time reaction registered it's going to write "NO TIME" at the top of the screen.
                            </Text>
                            <Text style={styles.alertMessageTextStyle}>
                                -By pressing the "Quit" button you exit the game.
                            </Text>
                            <Text style={styles.alertMessageTextStyle}>
                                -Make sure to enjoy and always react after the red lights :)
                            </Text>

                        </View>
                        <View style={styles.bottomPart} >
                            <Button title="Back Home" onPress={() => setInstr(false)} />
                        </View>
                    </View>
                </Modal>
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
    mainContainer: {
        position: 'absolute',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#484048',
        padding: 4,
    },
    topPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: -30,
    },
    middlePart: {
        flex: 1,
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 4,
        color: '#FFFFFF',
        fontSize: 16,
        marginVertical: -40,
    },
    bottomPart: {
        flex: 0.08,
        width: '100%',
        flexDirection: 'row',
        padding: 4,
        justifyContent: 'center',
        paddingBottom: 15,
    },
    alertIconStyle: {
        height: 40,
        width: 40,
    },
    alertTitleTextStyle: {
        flex: 1,
        textAlign: 'center',
        color: '#00E1FF',
        fontSize: 38,
        fontWeight: 'bold',
        padding: 2,
        marginHorizontal: 2
    },
    alertMessageButtonStyle: {
        paddingHorizontal: 6,
        marginVertical: 4,
        borderRadius: 10,
        backgroundColor: '#80BFFF',
        justifyContent: 'center'
    },
    alertMessageTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    alertMessageTextStyle: {
        color: '#FFFFFF',
        textAlign: 'justify',
        fontSize: 18,
        padding: 2,
    }

})

export default LoadingScreen;