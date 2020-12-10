import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ProductList from '../components/ProductList';
import { Actions } from 'react-native-router-flux';

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

  const goBack = () => {
    Actions.pop();
  }

  const goTo = (route) => {
    Actions.push(route);
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
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={goBack}>
          <Text style={styles.btnText}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => goTo('nfc')}>
          <Text style={styles.btnText}>Pay (CB)</Text>
        </TouchableOpacity><TouchableOpacity style={styles.btn} onPress={() => goTo('qr')}>
          <Text style={styles.btnText}>Pay (Cheque)</Text>
        </TouchableOpacity>
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
  btnContainer: {
    display: 'flex',
    height: '20%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 50,
  },
  btn: {
    width: '33%',
    display: 'flex',
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    alignItems: 'center',
    height: 10,
    padding: 10
  },
  btnText: {
    color: '#FFF'
  }
})

export default Cart