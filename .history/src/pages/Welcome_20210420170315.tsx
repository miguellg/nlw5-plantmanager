import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import watering from '../assets/';

export function Welcome(){
    return(
        <View>
            <Text>
            Gerencie suas plantas de forma fácil
            </Text>

            <Image source={watering} />

            <Text>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity>
                <Text>
                    >
                </Text>
            </Touchable>
        </View>
    )
}