import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import watering from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
            Gerencie suas plantas de forma fácil
            </Text>

            <Image source={watering} />

            <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text>
                    >
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading
    }
})