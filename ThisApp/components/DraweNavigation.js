import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Homescreen';
import CartScreen from './CartScreen';
import ProductDetailScreen from './ProductDetailScreen';
import { Button,Image } from 'react-native';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Our Story" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen} 
  
      />
    </Stack.Navigator>
  );
}

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" options={{ drawerLabel: () => null }} >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
        />
        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}