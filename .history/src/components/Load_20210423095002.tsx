import React from 'react';
import LottieView from 'lottie-react-native';
import loadAdnimation from '../assets/load.json';
import { StyleSheet, View } from 'react-native';

export function Load(){
    return (
        <View styles={styles.container}>
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

    },
    animation: {
        
    }
})