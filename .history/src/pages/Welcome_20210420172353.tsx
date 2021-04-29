import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import watering from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
            Gerencie {'\n'}
            suas plantas {'\n'}
            de forma fácil
            </Text>

            <Image source={watering} style={styles.image}/>

            <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button />
            <Button />
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
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    image: {
        height: 292,
        width: 284
    }
})