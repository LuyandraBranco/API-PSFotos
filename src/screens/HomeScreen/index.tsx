import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export function HomeScreen({navigation}: any) {
  return (
    <SafeAreaView style={styles.containerHomeScreen}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/homeScreenLogo.png')}
          style={styles.imagem}
        />
      </View>
      <Text style={styles.title}>Bem-vindo ao PSFotos</Text>
      <Text style={styles.description} numberOfLines={2}>
        Crie álbuns, compartilhe fotos, adicione os seus amigos de forma segura
      </Text>
      <TouchableOpacity
        style={styles.buttonSignIn}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSignUp}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.textButton}>Registar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
