import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerHomeScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontFamily: 'Open Sans',
  },
  imageContainer: {
    width: '100%',
    height: '63%',
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
    marginBottom: 26,
    fontSize: 16,
  },
  buttonSignIn: {
    width: 350,
    height: 52,
    backgroundColor: '#01499D',
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonSignUp: {
    width: 350,
    height: 52,
    backgroundColor: '#007DFE',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
