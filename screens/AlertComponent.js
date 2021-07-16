/* eslint-disable */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { useState } from 'react/cjs/react.development';



const AlertComponent = () => {
    const [instrClosed, setInstrClosed] = useState(true);
    const onPositiveButtonPress = () => {
        setInstrClosed(false);
    }
    if (instrClosed) {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.topPart}>
                    <Image source={require('../assets/library.png')} resizeMode={'contain'} style={styles.alertIconStyle} />
                    <Text style={styles.alertTitleTextStyle}>Game Instructions!</Text>
                </View>
                <View style={styles.middlePart}>
                    <Text style={styles.alertMessageTextStyle}>
                        -Start Game button sends the user to Game screen.
                    </Text>
                    <Text style={styles.alertMessageTextStyle}>
                        -Start Game button sends the user to Game screen.
                    </Text>
                </View>
                <View style={styles.bottomPart} >
                    <Button title="Back Home" onPress={() => onPositiveButtonPress()} />
                </View>
            </View>

        );
    }
    else {
        return (<View></View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        height: '25%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    mainContainer: {
        position: 'absolute',
        flexDirection: 'column',
        height: '25%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#484048',
        borderRadius: 10,
        padding: 4,
    },
    topPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2,
        paddingVertical: 4
    },
    middlePart: {
        flex: 1,
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 4,
        color: '#FFFFFF',
        fontSize: 16,
        marginVertical: 2,
    },
    bottomPart: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        padding: 4,
        justifyContent: 'space-evenly'
    },
    alertIconStyle: {
        height: 40,
        width: 40,
    },
    alertTitleTextStyle: {
        flex: 1,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 18,
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
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    alertMessageTextStyle: {
        color: '#FFFFFF',
        textAlign: 'justify',
        fontSize: 16,
        padding: 2,
    }
})

export default AlertComponent;