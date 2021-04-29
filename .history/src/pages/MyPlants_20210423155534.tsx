import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import colors from '../styles/colors';
import waterdrop from '../assets/waterdrop.png';
export function MyPlants(){
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image
                    source={waterdrop}
                    style={styles.spotlightImage}
                />
                <Text style={styles.spotlightText}>
                    dsadsadsad
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    }
})