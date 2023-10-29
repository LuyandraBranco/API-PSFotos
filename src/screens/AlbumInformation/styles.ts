import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerAlbumInformation: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontFamily: 'Open Sans',
  },
  header: {
    width: '100%',
    height: 45,
    marginBottom: 15,
    marginTop: 10,
    borderBottomWidth: 0.4, 
    borderBottomColor: '#878787',
    flexDirection: 'row'
  },
  informationContainer: {
    width: '100%',
    height: 660,
    borderBottomWidth: 0.4, 
    borderBottomColor: '#878787',
    marginBottom: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  informationAlbum:{
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  text:{
    color: '#878787'
  }
});
