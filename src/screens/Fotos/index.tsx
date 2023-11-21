import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import styles from "./style";

const data = [
    { id: 1, title: "Item 1", image: require("../../assets/imagem.jpg") },
    { id: 2, title: "Item 2", image: require("../../assets/imagem.jpg") },
    { id: 3, title: "Item 3", image: require("../../assets/imagem.jpg") },
    { id: 4, title: "Item 4", image: require("../../assets/imagem.jpg") },
    { id: 5, title: "Item 5", image: require("../../assets/imagem.jpg") },
    { id: 6, title: "Item 6", image: require("../../assets/imagem.jpg") },
    { id: 7, title: "Item 7", image: require("../../assets/imagem.jpg") },
    { id: 8, title: "Item 8", image: require("../../assets/imagem.jpg") },
    { id: 9, title: "Item 9", image: require("../../assets/imagem.jpg") },
    { id: 10, title: "Item 10", image: require("../../assets/imagem.jpg") },
    { id: 11, title: "Item 11", image: require("../../assets/imagem.jpg") },
    { id: 12, title: "Item 12", image: require("../../assets/imagem.jpg") },
];


export default function Foto({navigation}: any) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <EvilIcons name="search" size={24} color="black" style={styles.headerIcon}  onPress={() => navigation.navigate('Pesquisar')}></EvilIcons>/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.headerText, { color: "#01499D", marginRight: 15 }]}>Fotos</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.headerText, { color: "black" }]}  onPress={() => navigation.navigate('AlbumScreen')}>Álbuns</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                {data.map((item) => (
                    <Image key={item.id} source={item.image} style={styles.image} />
                ))}
            </View>
        </View>
    );
}

