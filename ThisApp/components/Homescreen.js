import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { addToCart } from './cartHelpers';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        {/* <Button title="Add to Cart" onPress={() => addToCart(item)} /> */}
        <TouchableOpacity onPress={()=>addToCart(item)  }>
          <Image
          source={require('../assets/assets/add_circle.png')}
          style={{position:"relative",left:"70%"}}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{height:"10%",width:"10%", position:"relative",left:"35%"}}>
      <Image  source={require('../assets/assets/Logo.png')} />
      <Image style={{left:180,top:-25}} source={require('../assets/assets/shoppingBag.png')}/>
      <Image style={{left:150,top:-45}} source={require('../assets/assets/Search.png')} />
      </View>
      <View>
        <Image style={{left:300}} source={require('../assets/assets/Filter.png')}/>
        <Image style={{left:260,top:-15}} source={require('../assets/assets/Listview.png')}/>
        <Text style={{fontSize:20,position:"absolute"}}>Our Story</Text>
        
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  flatListContent: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    width: 180,
    height: 250,
    margin: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    left:"10%"
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});
