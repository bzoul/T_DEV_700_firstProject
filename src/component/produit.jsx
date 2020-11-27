// Components/produit.js

import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'


class produit extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri:'./assets/maxi-coca.jpg' }}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{"nom du produit"}</Text>
            <Text style={styles.prix}>{"Prix"}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{"description du produit"}</Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          <View style={styles.date_container}>
            <Button title="Ajouter" />
            <Text style={styles.nb_Produit}>{"nombre de produit"}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    paddingTop:20,
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
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
    fontSize: 26,
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
    flex: 1
  },
  nb_Produit: {
    textAlign: 'right',
    fontSize: 14,
    flex:1
  },
  button:{
    flex:1,
    width: 25,
    
  }
})

export default produit