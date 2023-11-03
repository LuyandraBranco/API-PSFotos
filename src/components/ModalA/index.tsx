import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  placeh: string;
}

export function ModalA({ isVisible, onClose, title, placeh }: ModalProps) {
  
  const [inputValue, setInputValue] = useState('');

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}> {title} </Text>
          <TextInput
            style={styles.input}
            placeholder={placeh}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
              
            }}>
              <Text style={styles.textButton}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
