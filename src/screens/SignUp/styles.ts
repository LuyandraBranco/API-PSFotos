import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerSignIn: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontFamily: 'Open Sans',
  },
  imageContainer: {
    width: '100%',
    height: '37%',
    backgroundColor: '#01499D',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10, 
    marginBottom: 15
  },
  imagem:{
    flex: 1,
    resizeMode: 'cover',
  },
  inputsContainer:{
    alignItems:'flex-start'
  },
  input: {
    width: 325,
    height: 54,
    borderColor: '#1C1C1E',
    borderWidth: 1, 
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16
  },
  text:{
    color: '#1C1C1E',
    fontSize: 16,
    marginBottom: 12
  },
  textColor:{
    color: '#007DFE',
  },
  titleImageContainer:{
    fontFamily: 'Open Sans',
    fontSize: 24,
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 3,
  },
  title: {
    fontFamily: 'Open Sans',
    fontSize: 24,
    color: '#1C1C1E',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 3,
  },
  description: {
    color: '#1C1C1E',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 16,
  },
  buttonSignIn: {
    width: 350,
    height: 52,
    backgroundColor:'#01499D',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 22
  },
  textButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
