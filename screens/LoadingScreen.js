/* eslint-disable */
import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, Alert } from 'react-native'


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
                <Image source={require('../assets/no1.png')} style={styles.img} onLoad={() => { setTimeout(message, 500); }} />
                {isOn == 1 && <Image source={require('../assets/b1.png')} style={styles.balls} onLoad={() => { setTimeout(message, 1000); }} />}
                {isOn == 2 && <Image source={require('../assets/b2.png')} style={styles.balls} onLoad={() => { setTimeout(message, 1000); }} />}
                {isOn == 3 && <Image source={require('../assets/b3.png')} style={styles.balls} onLoad={() => { setTimeout(message, 1000); }} />}
                {isOn == 4 && <Image source={require('../assets/b4.png')} style={styles.balls} onLoad={() => { setTimeout(message, 1000); }} />}
                {isOn == 5 && <Image source={require('../assets/b5.png')} style={styles.balls} onLoad={() => { setTimeout(message, 1000); }} />}
            </View>
            <View style={styles.myLightsOut}>
                {isOn > 5 && <Text style={styles.lightsOut}>Lights Out</Text>}
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
    },
    balls: {
        position: 'absolute',
        width: 831,
        height: 511,
        marginLeft: 34,
        marginTop: 80,
    }
    //<Image source={require('../assets/66.jpg')} style={styles.image} />
})

export default LoadingScreen;