import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {SignIn} from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';
import {AlbumInformation} from '../screens/AlbumInformation';

const {Screen, Navigator} = createNativeStackNavigator();

export function StackRouter() {
  return (
    <Navigator>
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
      <Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
      <Screen
        name="AlbumInformation"
        component={AlbumInformation}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
