import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {House, SignOut, Images} from 'phosphor-react-native';

export function Menu({navigation}: any) {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.itemMenu}>
        <House size={24} color="#878787"/>
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.itemMenu}>
        <Images size={24} color="#878787"/>
        <Text style={styles.text}>Álbuns</Text>
      </View>
      <View style={styles.itemMenu}>
        <SignOut size={24} color="#878787"/>
        <Text style={styles.text}>Sair</Text>
      </View>
    </View>
  );
}
