// import { StatusBar } from 'expo-status-bar';
// import { Text, View,Image,ScrollView,StyleSheet } from 'react-native';
// import  DrawerNavigation from './components/DraweNavigation'


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <DrawerNavigation/>
//       <StatusBar style="auto" />
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
  
    
//   }
  
// });
import React from 'react';
import DrawerNavigation from './components/DraweNavigation';

export default function App() {
  return <DrawerNavigation />;
}
