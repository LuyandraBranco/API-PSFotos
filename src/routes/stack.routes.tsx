import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Logo} from '../screens/Logo';

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRouter() {
  return (
    <Navigator>
      <Screen name="Logo" component={Logo} />
    </Navigator>
  );
}
