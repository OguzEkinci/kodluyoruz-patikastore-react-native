import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Product.style';
function ProductCard({product}) {
  return (
    <View style={styles.card}>
      <Image source={{uri: product.imgURL}} style={styles.product_img} />
      <View>
        <Text style={styles.product_name}>{product.title}</Text>
        <Text style={styles.product_price}>{product.price}</Text>
        {!product.inStock && (
          <Text style={{color: 'red', fontWeight: 'bold'}}>STOKTA YOK</Text>
        )}
      </View>
    </View>
  );
}
export default ProductCard;
