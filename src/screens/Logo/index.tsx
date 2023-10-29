import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import styles from './styles';
export function Logo() {
  return (
    <SafeAreaView>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>Logo</Text>
      </View>
    </SafeAreaView>
  );
}
