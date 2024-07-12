// // CartScreen.js

// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Button, StyleSheet, Image,TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { removeFromCart } from './cartHelpers';

// export default function CartScreen() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     async function fetchCartItems() {
//       try {
//         const items = await AsyncStorage.getItem('cart');
//         setCartItems(JSON.parse(items) || []);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchCartItems();
//   }, []);

//   const handleRemoveFromCart = async (item) => {
//     console.log('Removing item:', item); // Log the item being removed
//     await removeFromCart(item, setCartItems); // Call removeFromCart with setCartItems
//     console.log('Cart items after removal:', await AsyncStorage.getItem('cart')); // Log cart items after removal
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={cartItems}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <View style={styles.textContainer}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.price}>${item.price}</Text>
//             </View>
//             {/* <Button title="Remove from cart" onPress={() => handleRemoveFromCart(item)} /> */}
//             <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
//               <Image 
//                 source={ require('../assets/assets/remove.png')} 
//                 style={styles.removeIcon} 
//               />
//             </TouchableOpacity>
            
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//     padding: 10,
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: 10,
//     width:"100%",
//     flexDirection: 'row',
//     borderRadius:20,
//     alignItems: 'center',
    
    
//   },
//   image: {
//     width: "40%",
//     height: "100%",
   
//   },
//   textContainer: {
//     flex: 1,
//     height:150,
//     width:150
   
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
  
//   price: {
//     fontSize: 14,
//     color: '#888',
//   },
// });



import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { removeFromCart } from './cartHelpers';

export default function CartScreen() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const items = await AsyncStorage.getItem('cart');
        setCartItems(JSON.parse(items) || []);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (item) => {
    console.log('Removing item:', item); // Log the item being removed
    await removeFromCart(item, setCartItems); // Call removeFromCart with setCartItems
    console.log('Cart items after removal:', await AsyncStorage.getItem('cart')); // Log cart items after removal
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
              <Image 
                source={ require('../assets/assets/remove.png')} 
                style={styles.removeIcon} 
              />
            </TouchableOpacity>
          </View>
        )}
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
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  removeIcon: {
    width: 24,
    height: 24,
    tintColor: 'red',
  },
});



