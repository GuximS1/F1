/* eslint-disable */
import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, Alert } from 'react-native'

import main from '../loading/main';

const LoadingScreen = (props) => {
    const [isOn, setIsOn] = useState(0);
    const message = () => {
        setIsOn(isOn + 1);
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/66.jpg')} resizeMode="cover" style={styles.image} />
            <Text style={styles.title}> F1 Reaction</Text>
            <View style={styles.big}>
                {isOn == 0 && <Image source={require('../assets/no1.png')} style={styles.img} onLoad={() => { setTimeout(message, 500); }} />}
                {isOn == 1 && <Image source={require('../assets/no2.png')} style={styles.img} onLoad={() => { setTimeout(message, 500); }} />}
                {isOn == 2 && <Image source={require('../assets/no3.png')} style={styles.img} onLoad={() => { setTimeout(message, 500); }} />}
                {isOn == 3 && <Image source={require('../assets/no4.png')} style={styles.img} onLoad={() => { setTimeout(message, 500); }} />}
                {isOn == 4 && <Image source={require('../assets/no5.png')} style={styles.img} onLoad={() => { setTimeout(message, 500); }} />}
                {isOn == 5 && <Image source={require('../assets/no6.png')} style={styles.img} />}
            </View>
            <View style={styles.myLightsOut}>
                <Text style={styles.lightsOut}>Lights Out</Text>
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
    },
    lightsOut: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold'
    },
    myLightsOut: {
        position: 'absolute',
        paddingTop: 620,
    }
    //<Image source={require('../assets/66.jpg')} style={styles.image} />
})

export default LoadingScreen;