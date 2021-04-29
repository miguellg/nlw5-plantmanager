import React from 'react';
import { 
    StyleSheet, 
    Text, 
    Image,
    View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { color } from 'react-native-reanimated';

import Avatar from '../assets/miguel.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.gretting}>Olá,</Text>
                <Text style={styles.userName}>Miguel</Text>
            </View>

            <Image 
                style={styles.image}
                source={Avatar} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        padding: 20        
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    gretting: {
        fontSize: 22,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 22,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})