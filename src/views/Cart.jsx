import React from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);

  console.log(cart);

  return (<>
    <View style={styles.view}>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scroll}>
          <ProductList input={cart} />
        </ScrollView>
      </View>
    </View>
  </>)
}

const styles = StyleSheet.create({
  view: {
    marginLeft: 'auto',
    display: 'flex',
    flex: 1,
    marginRight: 'auto',
    width: '80%',
  },
  scrollContainer: {
    height: '80%'
  },
})

export default Cart