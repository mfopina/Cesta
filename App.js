// APP.JS

import React from 'react';

import { StatusBar, StyleSheet, SafeAreaView } from 'react-native-web';

import Cesta from './assets/tela/Cesta';

export default function App() {
  return (
    <SafeAreaView>

      <StatusBar />
      <Cesta />

      </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
