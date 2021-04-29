import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps {
    text: string
}
export function Button(props: ButtonProps){
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
        >
            <Text style={styles.buttonText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({    
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
})