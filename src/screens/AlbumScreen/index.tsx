import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Image, FlatList } from 'react-native';
import { MagnifyingGlass } from 'phosphor-react-native';
import styles from './styles';
import { Menu } from '../../components/MenuAlbum';


const images = [
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/200',
];

export function AlbumScreen({ navigation }: any) {
  return (

    <SafeAreaView>
      <View style={styles.container}>
        <MagnifyingGlass />
        < Text style={styles.textFotos} onPress={() => navigation.navigate('AlbumScreen')}>Fotos</Text>
        <Text style={styles.text}>Álbuns </Text>
      </View>
      
    <FlatList
    
      data={images}
      numColumns={2} 
      style={{ height: '80%' }}
      keyExtractor={(item, index) => index.toString()} 
      renderItem={({ item, index }) => (
        <View style={styles.item}>
          <Image source={{ uri: item }} style={styles.image} />
          <Text style={styles.albumText}>Nome {index + 1}</Text>
          <Text style={styles.albumText}>{index + 1}</Text>
        </View>
      )}
    />
    <View style={styles.menuPosition}>
    <Menu  style={{ height: '80%', margin: 600}}/>
    </View>
    </SafeAreaView>
  )
}