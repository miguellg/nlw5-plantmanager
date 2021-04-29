import React from 'react';
import LottieView from 'lottie-react-native';
import loadAdnimation from '../assets/load.json';
import { StyleSheet, View } from 'react-native';

export function Load(){
    return (
        <View style={styles.container}>
            <LottieView 
                source={loadAdnimation}
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    animation: {
        backgroundColor: 'transparrnt',
        width: 200,
        height: 200
    }
})