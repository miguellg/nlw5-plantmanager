import React from 'react';
import { 
    StyleSheet, 
    Text, 
    Image,
    View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import Avatar from '../assets/miguel.png';
import colors from '../styles/colors';

export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text>Olá,</Text>
                <Text>Miguel</Text>
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

    }
})