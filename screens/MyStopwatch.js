/* eslint-disable */
import React, { useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

const MyStopwatch = () => {

    const [isOn1, setIsOn1] = useState(0);
    const message1 = () => {
        setIsOn1(isOn1 + 1);
    }

    const [isStopwatchStart, setIsStopwatchStart] = useState(false);


    const [resetStopwatch, setResetStopwatch] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.big}>
                    <Image source={require('../assets/no1.png')} style={styles.img} />
                    {isOn1 == 1 && <Image source={require('../assets/b1.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                    {isOn1 == 2 && <Image source={require('../assets/b2.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                    {isOn1 == 3 && <Image source={require('../assets/b3.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                    {isOn1 == 4 && <Image source={require('../assets/b4.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                    {isOn1 == 5 && <Image source={require('../assets/b5.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                </View>
                <View style={styles.sectionStyle}>
                    <Stopwatch
                        laps
                        msecs
                        start={isOn1 > 5 && isStopwatchStart}
                        // To start
                        reset={resetStopwatch}
                        // To reset
                        options={options}
                        // Options for the styling
                        getTime={(time) => {
                            console.log(time);
                        }}
                    />
                    <TouchableHighlight
                        onPress={() => {
                            setIsStopwatchStart(!isStopwatchStart);
                            setResetStopwatch(false);
                            setTimeout(message1, 0);
                        }}>
                        <Text style={styles.buttonText}>
                            {!isStopwatchStart ? 'START' : 'STOP'}
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            setIsStopwatchStart(false);
                            setResetStopwatch(true);
                        }}>
                        <Text style={styles.buttonText}>RESET</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MyStopwatch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    sectionStyle: {
        flex: 1,
        position: 'absolute',
        paddingTop: 720,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        marginTop: 10,
    },
    img: {
        resizeMode: 'contain',
        width: 900,
        marginLeft: 50,
        marginTop: 40,
    },
    balls: {
        position: 'absolute',
        width: 831,
        height: 511,
        marginLeft: 84.6,
        marginTop: 120,
    },
    big: {
        marginTop: 0,
        marginRight: 24,
    }
});

const options = {
    container: {
        backgroundColor: '#FF0000',
        padding: 5,
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: '#FFF',
        marginLeft: 7,
    },
};