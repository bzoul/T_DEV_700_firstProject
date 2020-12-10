// Components/produit.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/actions/cart'


const Product = ({ id, name, price, desc, img, qty }) => {

  const dispatch = useDispatch();

  const addProduct = () => {
    addToCart({ id: id, name: name, price: price, desc: desc, img: img })(dispatch)
  }

  const removeProduct = () => {
    removeFromCart({ id: id, name: name, price: price, desc: desc, img: img })(dispatch);
  }

  return (
    <View style={styles.main_container}>
      <Image
        style={styles.image}
        source={{uri: img }}
      />
      <View style={styles.content_container}>
        <View style={styles.header_container}>
          <Text style={styles.title_text}>{name}</Text>
          <Text style={styles.prix}>{price}</Text>
        </View>
        { qty ? <Text>Quantité: {qty}</Text> : undefined }
        <View style={styles.description_container}>
          <Text style={styles.description_text} numberOfLines={6}>{desc}</Text>
          {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
        </View>
        <View style={styles.date_container}>
          { !qty ? <TouchableOpacity style={styles.btn} onPress={addProduct}><Text style={styles.btnText}>Ajouter</Text></TouchableOpacity> : <TouchableOpacity style={styles.btn} onPress={removeProduct}><Text style={styles.btnText}>Retirer</Text></TouchableOpacity> }
          
          <Text style={styles.nb_Produit}>{"nombre de produit"}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    paddingTop:20,
    paddingBottom: 30,
    height: 150,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  image: {
    width: 100,
    height: 90,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  prix: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '20%',
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nb_Produit: {
    textAlign: 'right',
    fontSize: 14,
    flex:1
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

export default Product