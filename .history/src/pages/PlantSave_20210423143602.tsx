import React from 'react';
import { 
    StyleSheet, 
    View , 
    ScrollView,
    Text,
    Image
} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { color } from 'react-native-reanimated';
import { SvgFromUri } from 'react-native-svg';

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSave(){
    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri=""
                    height={150}
                    width={150}
                />

                <Text style={styles.plantName}>
                    Nome da Planta
                </Text>

                <Text style={styles.plantAbout}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam praesentium saepe, optio laboriosam reprehenderit assumenda at debitis corporis. Enim culpa nobis quas atque eum beatae quaerat, odit praesentium consequatur facere.
                </Text>
            </View>

            <View style={styles.container}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        Lorem ipsum dolor sitamet consectetur, adipisicing elit. Sunt eum eaque voluptasnulla voluptatum? Blanditiis ab, cum, magnam iste commodi necessitatibus vitae saepe consectetur temporibus esse suscipit dolorem iusto fugit!
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhorr horário para serr lembrado:
                </Text>

                <Button 
                    text="Cadastrar Planta" 
                    onPress={()=> {}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colors.shape
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15
    },
    plantAbout: {
        textAlign: "center",
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10
    },
    tipContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.blue_light,
        paddding: 20
    },
    tipImage: {
        width: 56,
        height: 56
    },
    tipText: {
        flex: 1,
        marginLeft: 20,

    }

})