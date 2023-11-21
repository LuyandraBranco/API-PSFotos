import React from "react";
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

export default function Pesquisar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="ios-search" size={24} color="#9B9797" />
          <TextInput
            style={styles.input}
            placeholder="Pesquisar ficheiro"
            placeholderTextColor="#9B9797"
          />
        </View>
        <TouchableOpacity>
        <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
