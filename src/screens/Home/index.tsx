import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from './style';


export default function Home() {
    // Lista de itens
    const items = [
        { id: 1, title: "Criar Álbum", image: require("../../assets/criar.jpg") },
        { id: 2, title: "Ver Álbum", image: require("../../assets/verfoto.jpg") },
        { id: 3, title: "Encontrar Usuários", image: require("../../assets/encontrarusuario.avif") },
        { id: 4, title: "Adicionar Fotos/Álbum", image: require("../../assets/fotosalbum.jpg") },
        { id: 5, title: "Adicionar Usuários/Álbum", image: require("../../assets/adicionar.jpg") },
        { id: 6, title: "Listar Álbuns/Usuário", image: require("../../assets/usuarios.avif") },
    ];

    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>PSFotos</Text>
                <View style={styles.userInfo}>
                    <AntDesign name="user" size={24} color="#FFFFFF" />
                    <Text style={styles.username}>Username</Text>
                </View>
            </View>

            {/* Lista de itens */}
            <View style={[styles.itemContainer, { marginTop: 30 }]} >
                {items.map((item) => (
                    <View style={styles.item} key={item.id}>
                        <Image source={item.image} style={styles.itemImage} />
                        <TouchableOpacity  >
                            <Text style={styles.itemTitle}>{item.title}</Text>
                        </TouchableOpacity>

                    </View>
                ))}
            </View>
        </View>
    );
}