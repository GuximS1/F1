/* eslint-disable */
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Alert,
    Modal,
    TouchableOpacity
} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

const MyStopwatch = () => {

    const [isOn1, setIsOn1] = useState(0);
    const message1 = () => {
        setIsOn1(isOn1 + 1);
    }
    const [timing, myTiming] = useState(null);
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [startStop, setStartStop] = useState(0);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    const [modalTrue, setModalTrue] = useState(false);
    const [DNF, setDNF] = useState(true);
    const [test, myTest] = useState(false);
    var timeTotal = 0;
    var textMode = "START";
    var myResults = [];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.big}>
                    <Image source={require('../assets/no1.png')} style={styles.img} />
                    {(isOn1 === 1 && test) && <Image source={require('../assets/b1.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                    {(isOn1 === 2 && test) && <Image source={require('../assets/b2.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                    {(isOn1 === 3 && test) && <Image source={require('../assets/b3.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                    {(isOn1 === 4 && test) && <Image source={require('../assets/b4.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
                    {(isOn1 === 5 && test) && <Image source={require('../assets/b5.png')} style={styles.balls} onLoad={() => { setTimeout(message1, 1000); }} />}
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
                            // time = time.split(':');
                            //time = (((Number(time[0]) * 3600) + (Number(time[1]) * 60) + Number(time[2])) * 1000) + Number(time[3]);
                            timeTotal = time;
                            console.log(timeTotal);
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            myTest(true);
                            setIsStopwatchStart(!isStopwatchStart);
                            setResetStopwatch(false);
                            setTimeout(message1, 0);
                            setStartStop(startStop + 1);
                            if (isStopwatchStart) {

                                if (timeTotal === "00:00:00:000") {
                                    /*
                                    Alert.alert("DNF");
                                    myTest(false);
                                    setIsOn1(0);*/
                                    setDNF(true);
                                }
                                else {/*
                                    Alert.alert("My Reaction Time", "This is my time: " + timeTotal + ".");
                                    setIsOn1(0);*/
                                    setDNF(false);
                                    myTiming(timeTotal);
                                    myResults.push(timeTotal);
                                }
                                myTest(false);
                                setIsOn1(0);
                                setModalTrue(true);
                            }
                        }}>
                        <Text style={styles.buttonText}>
                            {textMode
                                = (!isStopwatchStart ? 'START' : 'STOP')}
                        </Text>
                    </TouchableOpacity>

                </View>
                <Modal visible={modalTrue}>
                    <View style={styles.mainContainer}>
                        {DNF === true && <View style={{ position: 'absolute', paddingBottom: 550, }}><Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>False Start!</Text></View>}
                        {DNF === true && <Image source={require('../assets/Disqualified.png')} style={styles.dnf} />}
                        {DNF === true && <View style={styles.photo}><Text style={styles.textPhoto}>You got disqualified because you started before the lights go out!</Text></View>}
                        {DNF === false && <Image source={require('../assets/well-done.png')} style={{ marginTop: 170, }} />}
                        {DNF === false && <View><Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>Your time reaction:</Text></View>}
                        {DNF === false && <View style={{ borderWidth: 2, backgroundColor: 'violet', borderRadius: 5, marginTop: 10, }}><Text style={{ fontSize: 30 }}>{"  " + timing + "  "}</Text></View>}
                        {DNF === false && <Image source={require('../assets/flag.png')} style={{ resizeMode: 'contain', width: "90%" }} />}
                        <TouchableOpacity
                            onPress={() => {
                                setIsStopwatchStart(false);
                                setResetStopwatch(true);
                                setIsOn1(0);
                                setModalTrue(false);
                            }}>
                            <Text style={styles.buttonText}> Try Again </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
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
        fontSize: 30,
        marginTop: 10,
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: 'white',
        fontWeight: 'bold'

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
    },
    mainContainer: {
        position: 'absolute',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00505083',
        padding: 4,
        paddingBottom: 250,
    },
    dnf: {
        resizeMode: 'contain',
        width: '90%',
        marginTop: 250,
    },
    photo: {
        width: '90%',
        backgroundColor: 'red',
        borderWidth: 2,
        borderRadius: 10
    },
    textPhoto: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,

    },

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