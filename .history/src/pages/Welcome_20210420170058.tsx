import React from 'react';
import { Text, View } from 'react-native';

import watering from '../assets/watering.png';

export function Welcome(){
    return(
        <View>
            <Text>
            Gerencie suas plantas de forma fácil
            </Text>

            <Image source={watering} />
        </View>
    )
}