import React from 'react'
import {Button,Image, View,Text, StyleSheet, Pressable} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import background from '../Affichage/Image/background.jpg'
import background1 from '../Affichage/Image/background1.png'
import Game from '../Enigme/Game'

const Params =({ navigation })  => {
  
    return(
      <View>
        <View>
            <Image style={styles.image} source={background} />
            <Image style={styles.image1} source={background1} />
        </View>

        <View style={styles.boutton}>

           <Pressable style={styles.setting} onPress={() => navigation.navigate('Setting')}>
              <Feather name="settings" style={styles.setting_icons} size={24} color="white" /> 
              <Text style={styles.setting_text}>Setting</Text>
          </Pressable>

          
          <Pressable style={styles.score}>
            <MaterialIcons style={styles.setting_icons} name="score" size={24} color="white" />
            <Text style={styles.score_text}>Score : 00</Text> 
          </Pressable>
        
          <LinearGradient  style={styles.play} colors={['#a8f36c','#3db50a','#229b05','#30a908','#108d02','#a6f265','#4cb241','#1d9704']}> 
            <Pressable
              onPress={() => navigation.navigate('Play')}>
              <Ionicons name="ios-play" size={54} color="#F28322" />
            </Pressable>
          </LinearGradient>
        </View>
     </View>    
    )
}

const styles = StyleSheet.create({
  image:{
    width:360,
    height:750,
    position:'absolute'
  },
  image1:{
    justifyContent:'flex-start',
    margin: 60,
    position:'absolute'
  },
  boutton:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:350
  },
  setting:{
    backgroundColor:'#F2B90F',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    height:60,
    width:300
  },
  setting_text:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  setting_icons:{
    paddingRight:240,
    position:'absolute'
  },
  score:{
  margin:50,
  backgroundColor:'#5198E8',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:50,
  height:60,
  width:300 
  },
  score_text:{
    color:'white',
    fontWeight:'bold',
  fontSize:20
  },
  play:{
  borderRadius:100/3,
  height:100,
  width:100,
  alignItems:'center',
  justifyContent:'center',
  },
  play_text:{
    color:'white',
    fontWeight:'bold',
  fontSize:20
  }
})

export default Params
