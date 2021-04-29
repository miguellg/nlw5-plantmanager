import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';

import colors from '../styles/colors';
import waterdrop from '../assets/waterdrop.png';
import { loadPlant, PlantProps } from '../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

export function MyPlants(){
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWaterd, setNextWaterd] = useState<string>();

    useEffect(() => {
        async function loadStorageData(){
            const plantsStorage = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStorage[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt}
            )

            setNextWaterd(
                `Não esqueça de rergarr a ${plantsStorage[0].name} a ${nextTime} horas.`
            )

            setMyPlants(plantsStorage);
            setLoading(false);
        }
        loadStorageData();
    }, [])

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image
                    source={waterdrop}
                    style={styles.spotlightImage}
                />
                <Text style={styles.spotlightText}>
                    {nextWaterd}
                </Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    }
})