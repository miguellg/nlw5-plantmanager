import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading'
import Routes from './src/routes';
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { PlantProps } from './src/libs/storage';


export default function App() {
  const [ fonstLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    // Captura quando notificação chegar
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async notification => {
    //     const data = notification.request.content.data.plant as PlantProps;

    //     console.log(data);
    //   }
    // );

    // return () => subscription.remove()

    // Pega todas as notificacoes
    async function notifications(){
      const data = await Notifications.getAllScheduledNotificationsAsync();
      console.log(data)
    }

    notifications()
  }, [])

  if(!fonstLoaded)
    return <AppLoading />
    
  return (
    <Routes />
  )
}
