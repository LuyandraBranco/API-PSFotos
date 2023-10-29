import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import styles from './styles';
import {Menu} from '../../components/Menu';
import { ArrowLeft } from 'phosphor-react-native';

export function AlbumInformation({navigation}: any) {
  return (
    <SafeAreaView style={styles.containerAlbumInformation}>
      <View style={styles.header}>
      <ArrowLeft size={32} onPress={() => navigation.goBack()}/>
        <Text style={styles.title}>Informações do Álbum</Text>
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.informationAlbum}>Nome do Álbum: <Text style={styles.text}>Aventuras</Text></Text>
        <Text style={styles.informationAlbum}>Artista: <Text style={styles.text}>Luyandra Branco</Text></Text>
        <Text style={styles.informationAlbum}>
          Participantes:{' '}
          <Text style={styles.text}>
            Luyandra Branco, Cátia Adão, Jackson Júnior
          </Text>
        </Text>
        <Text style={styles.informationAlbum}>Data de criação:  <Text style={styles.text}>30 de Outubro de 2023</Text></Text>
        <Text style={styles.informationAlbum}>Número total de fotos:  <Text style={styles.text}>262</Text></Text>
        <Text style={styles.informationAlbum}>Tamanho:  <Text style={styles.text}>340 MB</Text></Text>
        <Text style={styles.informationAlbum}>Género:  <Text style={styles.text}>Global</Text></Text>
      </View>
      <Menu />
    </SafeAreaView>
  );
}
