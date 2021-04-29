import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export function UserIdentification() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containt}>
                <View style={styles.form}>
                    <Text style={styles.emoji}>
                        😁
                    </Text>

                    <TextInput 
                        style={styles.input}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    }
})