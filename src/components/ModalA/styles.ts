import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 30,
        width: 320,
      
      },
      modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 10,
        color:'rgba(0, 0, 0, 0.5)'
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        padding: 8,
        marginBottom: 20,
        color: 'rgba(0, 0, 0, 0.5)',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        borderRadius: 20,
        width: 200,
        height: 60,
        padding: 10,
        alignItems: 'center'
      },
      button:{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          width: 100,
          padding: 10,
          height: 50,
          borderRadius: 20,
          textAlign: 'center',
          alignItems: 'center',
          margin: 10
          
      },
      textButton:{
        fontSize: 17,
        textAlign: 'center',
        alignItems: 'center',
        color:'rgba(0, 0, 0, 0.5)'
        
      }
});