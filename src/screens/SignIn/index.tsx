import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

export function SignIn({navigation}: any) {
  return (
    <SafeAreaView style={styles.containerSignIn}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/signInLogo.png')}
          style={styles.imagem}
        />
      </View>
      <Text style={styles.title}>Bem-vindo ao PSFotos</Text>
      <Text style={styles.description}>
        Faça login na sua conta e não perca mais tempo
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
          Não tem uma conta?{' '}
          <Text
            style={styles.textColor}
            onPress={() => navigation.navigate('SignUp')}>
            Cadastre-se
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonSignIn}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
