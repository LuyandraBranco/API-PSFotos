import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    marginLeft: 47,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 25,
    color: 'blue',
  },

  textFotos: {
    marginHorizontal: 13,
    color: 'black',
    fontSize: 25,
  },
  scrollView: {
    flexDirection: 'row',
    
  },
  item: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    alignItems:'center'
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },

  albumText: {
    flexDirection: 'row',
    
    fontSize: 15,
    textAlign: 'center',
    color: 'gray'
  },
  menuPosition:{
    marginTop: '44%'
  },
 

 
});
