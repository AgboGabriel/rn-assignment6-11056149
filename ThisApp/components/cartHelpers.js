// cartHelpers.js

import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToCart = async (product) => {
  try {
    const items = await AsyncStorage.getItem('cart');
    const cart = JSON.parse(items) || [];
    cart.push(product);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export const removeFromCart = async (product, setCartItems) => {
  try {
    const items = await AsyncStorage.getItem('cart');
    let cart = JSON.parse(items) || [];
    cart = cart.filter(cartItem => cartItem.id !== product.id);
    await AsyncStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(cart);
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
};
