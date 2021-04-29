import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <style={style.container}>
      <Text>
        Olá
      </Text>
      <Text>
        NLW
      </Text>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})