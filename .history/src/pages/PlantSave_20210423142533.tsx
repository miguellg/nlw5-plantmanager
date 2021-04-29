import React from 'react';
import { 
    StyleSheet, 
    View , 
    ScrollView,
    Text,
    Image
} from 'react-native';
import { color } from 'react-native-reanimated';
import { SvgFromUri } from 'react-native-svg';

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

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
    }
})