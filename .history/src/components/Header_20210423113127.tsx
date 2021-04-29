import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const [userName, setUserName] = useState<string>()
    
    useEffect(() => {
        async function loadStorageUserName() {
            await AsyncStorage.getItem('@plantmanager:user')
        }

        loadStorageUserName()
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.gretting}>Olá,</Text>
                <Text style={styles.userName}></Text>
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
        marginTop: getStatusBarHeight()
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    gretting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})