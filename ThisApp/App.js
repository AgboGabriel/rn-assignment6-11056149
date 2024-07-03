import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import Homescreen from './components/Homescreen';

// function RepetitiveImages(props){
// return(
//   <View>
//     <Image source={props.img}/>
//     <Image style={{position:"relative",top:-25,left:130}} source={require("./assets/assets/add_circle.png")}/>
//     <Text style={{fontWeight:"bold",top:-10}}>{props.title}</Text>
//     <Text style={{top:-15}}>{props.name}</Text>
//     <Text style={{color:"brown",top:-15}}>{props.price}</Text>
//   </View>
// )
// }


export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      {/* <View style={styles.topContainer}>
        <Image source={require('./assets/assets/Menu.png')}/>
         <View style={{left:60}}>
        <Image source={require('./assets/assets/Logo.png')}/>
        </View>
        <View style={{left:120}} >
          <Image source={require('./assets/assets/Search.png')}/>
        </View>
        <View style={{left:140}}>
          <Image source={require('./assets/assets/shoppingBag.png')}/>
        </View>
      </View>
      <View style={styles.secTop}>
        <Image style={{top:10,left:12}} source={require('./assets/assets/Listview.png')}/>
      </View>
      <View style={styles.secTop2}>
        <Image style={{top:10,left:15}} source={require('./assets/assets/Filter.png')}/>
      </View>
      <Text style={{fontSize:20,left:-80}}> OUR STORY</Text>
      <View style={{position:"relative",left:-90,top:20}}>
       <View>
      <RepetitiveImages 
       img={require('./assets/assets/dress1.png')}
      title="Office Wear"
      name="reversible angora cardigan"
      price="$120"
      />
      </View>
     <View style={{left:180,top:-300}}>
    <RepetitiveImages 
       img={require('./assets/assets/dress2.png')}
       title="Black"
      name="reversible angora cardigan"
      price="$120"
      />
    </View>
     <View style={{position:"absolute",top:300}}>
          <RepetitiveImages 
       img={require('./assets/assets/dress3.png')}
       title="Church Wear"
       name="reversible angora cardigan"
       price="$120"
      />

      </View>
      <View style={{position:"relative",left:180,top:-300}}>
          <RepetitiveImages 
       img={require('./assets/assets/dress4.png')}
       title="lamerei"
       name="reversible angora cardigan"
       price="$120"
      />
      </View>
      <View style={{position:"absolute",top:600}}>
        <RepetitiveImages
        img={require('./assets/assets/dress5.png')}
        title="21WN"
        name="reversible angora cardigan"
        price="$120"
        />
      </View>
      <View style={{position:"absolute",top:600,left:180}}>
        <RepetitiveImages
        img={require('./assets/assets/dress6.png')}
        title="Lopo"
        name="reversible angora cardigan"
        price="$120"
        />
      </View>
      <View style={{position:"relative",left:180}}>
        <RepetitiveImages
        img={require('./assets/assets/dress3.png')}
        title="Lopo"
        name="reversible angora cardigan"
        price="$120"
        />
      </View>
      <View style={{position:"absolute",top:900}}>
        <RepetitiveImages
        img={require('./assets/assets/dress7.png')}
        title="21WN"
        name="reversible angora cardigan"
        price="$120"
        />
      </View>
  
      </View>
       */}
       <Homescreen />
      <StatusBar style="auto" />
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  topContainer:{
    position: "absolute",
    top:40,
    left:20,
    flexDirection:"row"
  },
  secTop:{
    top:100,
    left:80,
    borderRadius:30,
    width:50,
    height:50, 
    backgroundColor:"#f7f7f8"
  },
  secTop2:{
    top:50,
    left:140,
    borderRadius:30,
    width:50,
    height:50, 
    backgroundColor:"#f7f7f8"
  }
});
