import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';

export function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Hello Luyandra</Text>
    </SafeAreaView>
  );
}
