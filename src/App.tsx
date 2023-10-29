import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Routes} from './routes';

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Routes />
    </SafeAreaView>
  );
}
export default App;
