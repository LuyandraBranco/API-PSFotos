import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

export function SignUp({navigation}: any) {
  return (
    <SafeAreaView style={styles.containerSignIn}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/image4.png')}
          style={styles.imagem}
        />
      </View>
      <Text style={styles.title}>Registre-se ao PSFotos</Text>
      <Text style={styles.description} numberOfLines={2}>
        Nós nos preocupamos com a segurança das suas informações.
      </Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.text}>Nome do usuário</Text>
        <TextInput
          placeholder="Digite o seu nome do usuário"
          style={styles.input}
        />
        <Text style={styles.text}>Senha</Text>
        <TextInput
          placeholder="Digite a sua senha"
          secureTextEntry={true}
          style={styles.input}
        />
        <Text style={styles.text}>
         Já possui uma conta?{' '}
          <Text
            style={styles.textColor}
            onPress={() => navigation.navigate('SignIn')}>
            Entre
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonSignIn}>
        <Text style={styles.textButton}>Registrar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
