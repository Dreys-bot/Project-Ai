import React from 'react'
import {View, Image, Text, StyleSheet, ImageBackground, Button, Pressable} from 'react-native'
import background from './Image/background.jpg'
import background1 from './Image/background1.png'


const Affichage =({ navigation }) => {
 return(
   <View>
        <View>
            <Image style={styles.image} source={background} />
            <Image style={styles.image1} source={background1} />
          <View style={styles.main_container}>
              <Pressable style={styles.button_container}
                onPress={() => navigation.replace('Params')}>
                <Text style={styles.boutton}>START</Text> 
              </Pressable>
          </View>
        
        </View>
    </View>    
    )
  }


const styles = StyleSheet.create({
 main_container:{
   position:'absolute',
   top:'50%',
   left:'20%',
    marginTop:580,
    width:220
 },
boutton:{
  fontWeight:'bold',
  fontSize:30,
  paddingLeft:65,
  paddingTop:10,
  color:'white'
},
button_container:{
  backgroundColor:'#33AC09',
  borderRadius:50,
  height:60,
  width:220
},
image:{
  width:'100%',
  height:750,
  position:'absolute'
},
image1:{
  justifyContent:'flex-start',
  alignItems:'center',
  margin: 60,
  position:'absolute'
}

 
})
export default Affichage
