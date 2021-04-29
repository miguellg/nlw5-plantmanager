import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    }
}

export const PlantCardSecondary = ({ data, ...rest} : PlantProps) => {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <SvgFromUri 
                uri={data.photo} 
                width={50} 
                height={50}
            />
            <Text style={styles.title}>
                {data.name}
            </Text>
            <View style={styles.detail}>
                <Text style={styles.timeLabel}>
                    Regar as
                </Text>
                <Text style={styles.time}>
                    {data.hour}
                </Text>
            </View>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: "center",
        margin: 10
    }
})