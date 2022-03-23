import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    margin: 10,
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').height / 3,
  },
  product_img: {
    flex: 1,
    borderRadius: 10,
    margin: 2,
    resizeMode: 'stretch',
  },
  product_name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  product_price: {
    color: 'gray',
  },
});
