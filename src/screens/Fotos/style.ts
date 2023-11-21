import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 15,
        marginTop: 40,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        justifyContent: "center", // Centraliza os elementos horizontalmente

    },
    headerIcon: {
        marginRight: 10,
    },
    headerText: {
        fontFamily: "Helvetica Neue",
        color: "#01499D",
        fontSize: 20,
        alignItems: "center"
    },
    imageContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    image: {
        width: "32%", // Para criar 3 imagens por linha
        aspectRatio: 1, // Manter a proporção da imagem
        marginBottom: 10,
    },





})