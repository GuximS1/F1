/* eslint-disable */
import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, Alert, Button } from 'react-native'
import GameScreen from './GameScreen';


const LoadingScreen = (props) => {
    const [isOn, setIsOn] = useState(0);
    const [isAvailable, setIsAvailable] = useState(true);
    const availableHandler = () => {
        setIsAvailable(false);
    }
    const Hello = <View style={styles.button}><Button title="Start Game" onPress={() => availableHandler()} /></View>;
    const message = () => {
        setIsOn(isOn + 1);
    }
    if (isAvailable) {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/66.jpg')} resizeMode="cover" style={styles.image} />
                <Text style={styles.title}> F1 Reaction</Text>
                <View style={styles.big}>
                    <Image source={require('../assets/no1.png')} style={styles.img} onLoad={() => { setTimeout(message, 500); }} />
                    {isOn == 1 && <Image source={require('../assets/b1.png')} style={styles.balls} onLoad={() => { setTimeout(message, 1000); }} />}
                    {isOn == 2 && <Image source={require('../assets/b2.png')} style={styles.balls} onLoad={() => { setTimeout(message, 1000); }} />}
                    {isOn == 3 && <Image source={require('../assets/b3.png')} style={styles.balls} onLoad={() => { setTimeout(message, 1000); }} />}
                    {isOn == 4 && <Image source={require('../assets/b4.png')} style={styles.balls} onLoad={() => { setTimeout(message, 1000); }} />}
                    {isOn == 5 && <Image source={require('../assets/b5.png')} style={styles.balls} onLoad={() => { setTimeout(message, 1000); }} />}
                </View>
                <View style={styles.myLightsOut}>
                    {isOn > 5 && <Image source={require('../assets/rsz_rf1.png')} style={styles.rf} />}
                    {isOn > 5 && <Text style={styles.lightsOut}>Lights Out</Text>}
                    {isOn > 5 && <Image source={require('../assets/rsz_rf2.png')} style={styles.rf} />}
                </View>
                <View>{isOn > 5 && Hello}</View>

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
        paddingTop: 610,
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
        marginTop: 50,
        width: 128,
    },
    button: {
        width: 450,
        justifyContent: 'center',
        maxWidth: '50%',
        marginTop: 710,
    },

})

export default LoadingScreen;