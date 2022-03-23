/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  Image,
  useColorScheme,
  View,
} from 'react-native';
import product from './product.json';
import ProductCard from './components/ProductCard/index';
function App() {
  const renderProduct = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.headerText}>PATİKASTORE</Text>
      <TextInput style={style.inputText} placeholder={'Ara...'} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={product}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'purple',
  },
  inputText: {
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
    marginBottom: 10,
  },
});
