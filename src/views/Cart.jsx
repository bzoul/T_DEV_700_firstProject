import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import ProductList from '../components/ProductList';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const [total, setTotal] = useState(0);

  const calcCart = () => {
    let tmp = 0;
    cart.forEach((elem) => {
      tmp += elem.price * elem.qty 
    })
    setTotal(tmp);
  }

  useEffect(() => {
    calcCart()
  }, [cart])

  return (<>
    <View style={styles.view}>
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scroll}>
          <ProductList input={cart} />
        </ScrollView>
      </View>
      <View>
        <Text>Total price: { total }</Text>
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