import React from 'react'
import {Image,Text,StyleSheet,Pressable,View} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import background from '../Affichage/Image/background.jpg'

const Play = ({ navigation }) =>{
  
    return (
      <View>
          <View>
            <Image style={styles.image} source={background} />
          </View>

            <View style={styles.container}>
              <MaterialIcons name="navigate-before" onPress={() => navigation.goBack('Params')} style={styles.icons} size={34} color="#F2BB13" />
              <Text style={styles.text}>Level</Text>
           </View>

           <View>
                <Pressable style={styles.number1} onPress={() => navigation.navigate('Game')}>
                    <Text style={styles.text}>1</Text>
                </Pressable>

                <Pressable style={styles.number2} >
                    <Text style={styles.text}>2</Text>
                </Pressable>

                <Pressable style={styles.number3}>
                    <Text style={styles.text}>3</Text>
                </Pressable>

                 <Pressable style={styles.number4}>
                    <Text style={styles.text}>4</Text>
                </Pressable> 
               
                <Pressable style={styles.number5}>
                    <Text style={styles.text}>5</Text>
                </Pressable>

                <Pressable style={styles.number6}>
                    <Text style={styles.text}>6</Text>
                </Pressable>
                

                <Pressable style={styles.number7}>
                    <Text style={styles.text}>7</Text>
                </Pressable>

                <Pressable style={styles.number8}>
                    <Text style={styles.text}>8</Text>
                </Pressable>

                <Pressable style={styles.number9}>
                    <Text style={styles.text}>9</Text>
                </Pressable>

                <Pressable style={styles.number10}>
                    <Text style={styles.text}>10</Text>
                </Pressable>
           </View>
           
      </View>
    )
}

const styles=StyleSheet.create({
  image:{
    width:360,
    height:750,
    position:'absolute'
  },
  icons:{
  position:'absolute',
  paddingRight:240,
  paddingTop:7
},
container:{
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  height:60,
  paddingTop:15,
  backgroundColor:'#9351BF',
  borderBottomRightRadius:15,
  borderBottomLeftRadius:15
},
text:{
  fontWeight:'bold',
  fontSize:15,
  color:'white'
},
number1:{
  width:80,
  height:80,
  marginTop:50,
  marginLeft:50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#F2B90F'
},
number2:{
  width:80,
  height:80,
  marginTop:50,
  marginLeft:50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#afafaf'
},
number3:{
  width:80,
  height:80,
  marginTop:50,
  marginLeft:50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#afafaf'
},
number4:{
  width:80,
  height:80,
  marginTop:50,
  marginLeft:50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#afafaf'
},
number5:{
  width:80,
  height:80,
  marginTop:50,
  marginLeft:50,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#afafaf'
},
numberRight:{
  width:80,
  height:80,
  marginTop:50,
  marginLeft:220,
  position:'absolute',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#afafaf'
},
number6:{
  height:80,
  width:80,
  marginTop:45,
  marginLeft:220,
  position:'absolute',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#afafaf'
},
number7:{
  height:80,
  width:80,
  marginTop:175,
  marginLeft:220,
  position:'absolute',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#afafaf'
},
number8:{
  height:80,
  width:80,
  marginTop:300,
  marginLeft:220,
  position:'absolute',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#afafaf'
},
number9:{
  height:80,
  width:80,
  marginTop:430,
  marginLeft:220,
  position:'absolute',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#afafaf'
},
number10:{
  height:80,
  width:80,
  marginTop:565,
  marginLeft:220,
  position:'absolute',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:20,
  backgroundColor:'#afafaf'
}

})

export default Play
