import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { House, SignOut, Images, User, ShareFat } from 'phosphor-react-native';
import { ModalA } from '../ModalA';
import { useState } from 'react';

export function Menu({ navigation }: any) {

  const [isVisible, setIsVisible] = useState(false);
  const [selectModal, setSelectModal] = useState(0);

  const showModal = () => {
    setIsVisible(true);

  };

  const hideModal = () => {
    setIsVisible(false);
  };

  const modal1 = () => {
    setSelectModal(1);
  }

  const modal2 = () => {
    setSelectModal(2);
  }

  return (
    
    <View style={styles.menuContainer}>
      <View style={styles.itemMenu}>
        <House size={24} color="#878787" />
        <Text style={styles.text}>Home</Text>
      </View>

      <TouchableOpacity onPress={() => {
        showModal()
        modal1()
      }}>
        <View style={styles.itemMenu}>
          <Images size={24} color="#878787" />
          <Text style={styles.text}>Álbuns</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        showModal()
        modal2()
      }}>
        <View style={styles.itemMenu}>
          <ShareFat size={24} color="#878787" />
          <Text style={styles.text}>Partilhar</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.itemMenu}>
        <User size={24} color="#878787" />
        <Text style={styles.text}>User</Text>
      </View>

      {escolherModal()}



    </View>
  );

  function escolherModal() {
    if (selectModal === 1) {
      return (
        <ModalA
          isVisible={isVisible}
          onClose={hideModal}
          title="Criar Album"
          placeh="Nome do Album"
        />
      );
    } else {
      return (
        <ModalA
          isVisible={isVisible}
          onClose={hideModal}
          title="Encontrar Utilizador"
          placeh="Digite o nome de utilizador"
        />
      );
    }
    setSelectModal(0);
  }
}