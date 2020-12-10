import React, { useState, useEffect } from 'react'
import { TouchableOpacity, ScrollView, StyleSheet, View, Text } from 'react-native'
import {Actions} from 'react-native-router-flux';
import ProductList from '../components/ProductList'

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const arr = [
      { id: 0, name: 'Coca', price: 10, desc: 'Lol', img: 'https://www.sushimarket35.com/153-large_default/a1-coca-light-zero.jpg'},
      { id: 1, name: 'Coca', price: 7, desc: 'Lol', img: 'https://www.sushimarket35.com/153-large_default/a1-coca-light-zero.jpg'},
      { id: 2, name: 'Coca', price: 87, desc: 'Lol', img: 'https://www.sushimarket35.com/153-large_default/a1-coca-light-zero.jpg'},
      { id: 3, name: 'Coca', price: 3, desc: 'Lol', img: 'https://www.sushimarket35.com/153-large_default/a1-coca-light-zero.jpg'},
      { id: 4, name: 'Coca', price: 15, desc: 'Lol', img: 'https://www.sushimarket35.com/153-large_default/a1-coca-light-zero.jpg'},
      { id: 5, name: 'Coca', price: 25, desc: 'Lol', img: 'https://www.sushimarket35.com/153-large_default/a1-coca-light-zero.jpg'},
      { id: 6, name: 'Coca', price: 14, desc: 'Lol', img: 'https://www.sushimarket35.com/153-large_default/a1-coca-light-zero.jpg'},
    ]
    setList(arr)
  }, [])

  const goToCart = () => {
    Actions.push('cart')
  }

  return (<>
    <View style={styles.view}>
      <ScrollView style={styles.scroll}>
        <ProductList input={list} />
      </ScrollView>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={goToCart}>
          <Text style={styles.btnText}>Next</Text>
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
  scroll: {
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
    width: '40%',
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


export default Home