import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    headerContainer: {
        marginTop: 40, // Espaço superior de 20 unidades
        backgroundColor: "#01499D",
        padding: 10,
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      headerText: {
        fontSize: 30,
        fontFamily: "Helvetica Neue",
        color: "#FFFFFF",
      },
      userInfo: {
        flexDirection: "row",
        alignItems: "center",
      },
      username: {
        fontSize: 16,
        fontFamily: "Helvetica Neue",
        color: "#FFFFFF",
        marginLeft: 5,
      },
      content: {
        flex: 1,
        // Adicione estilos para o conteúdo da página Home aqui
      },
      itemContainer: {
        flexDirection: "row", // Alinha os itens horizontalmente
        flexWrap: "wrap", // Permite que os itens quebrem para a próxima linha quando não couberem mais na tela
        justifyContent: "space-between", // Distribui o espaço entre os itens
        backgroundColor: "#FFFFFF",
        padding: 10,
      },
      item: {
        width: "48%", // Largura dos itens para garantir que dois itens caibam em uma linha
        marginVertical: 10, // Espaçamento vertical entre os itens
        alignItems: "center", // Alinha os itens ao centro horizontalmente
      },
      itemImage: {
        width: 100, // Largura da imagem
        height: 100, // Altura da imagem
      },
      itemTitle: {
        fontSize: 16, // Tamanho da fonte
        color: "black", // Cor do texto
        marginTop: 5, // Espaçamento superior do texto
        textAlign: 'center'
      },

    }
    );