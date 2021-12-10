import React from 'react'
import {View,Text, StyleSheet, Button, Image,Pressable} from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import background from '../Affichage/Image/background.jpg'
import { MaterialIcons } from '@expo/vector-icons'
import background1 from '../Affichage/Image/background1.png'

const supportedurl = "https://peaksel.com/privacy-policy-for-free-apps/"

class Setting extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      etat:'off',
      backgroundColor:'#5198E8',
      background:'#5198E8',
      backSound:'#5198E8',
      back:'#5198E8',
      Progress:'#5198E8',
      test:'#5198E8'
    }
    this.changeColor = this.changeColor.bind(this)
    this.change = this.change.bind(this)
    this.changeSound = this.changeSound.bind(this)
    this.changePrivacy = this.changePrivacy.bind(this)
    this.changeTest = this.changeTest.bind(this)
  }

 

  changeColor(){
    if(this.state.etat === 'off')
     this.setState({
       etat:'on',
      backgroundColor:'#5a3a22'
     })
   
    else{
      this.setState({
        etat:'off',
          backgroundColor:'#5198E8'
      })
  }
  }

  change(){
     if(this.state.etat === 'off')
     this.setState({
       etat:'on',
      background:'#5a3a22'
     })
   
    else{
      this.setState({
        etat:'off',
          background:'#5198E8'
      })
  }
  }
  changeSound(){
    if(this.state.etat === 'off')
     this.setState({
       etat:'on',
      backSound:'#5a3a22'
     })
   
    else{
      this.setState({
        etat:'off',
          backSound:'#5198E8'
      })
  }
  }

  changePrivacy(){
    if(this.state.etat === 'off')
     this.setState({
       etat:'on',
      back:'#5a3a22'
     })
   
    else{
      this.setState({
        etat:'off',
        back:'#5198E8'
      })
    }
  }

  changeTest() {
     if(this.state.etat === 'off')
     this.setState({
       etat:'on',
      test:'#5a3a22'
     })
   
    else{
      this.setState({
        etat:'off',
        test:'#5198E8'
      })
    }
  }

  changeProgression() {
     if(this.state.etat === 'off')
     this.setState({
       etat:'on',
       Progress:'#5a3a22'
     })
   
    else{
      this.setState({
        etat:'off',
        Progress:'#5198E8'
      })
    }
  }
  
  render(){
    const {goBack} = this.props.navigation;
  return(
    <View>
      <Image style={styles.image} source={background} />

      <View style={styles.container}>
        <MaterialIcons name="navigate-before" onPress={() => goBack('Params')} style={styles.icons} size={34} color="#F2BB13" />
        <Text style={styles.text}>Setting</Text>
      </View>

      <View>
        <Pressable  style={styles.first_button}
            onPress={() => navigation.navigate('Magasin')}>
            <SimpleLineIcons style={styles.icons} name="basket" size={24} color="black" />
            <Text style={styles.text}>Magasin</Text> 
          </Pressable>

          <Pressable  style={{backgroundColor: this.state.backgroundColor, marginLeft:30,borderRadius:50,width:300,height:60,marginTop:20,justifyContent:'center',alignItems:'center',}} 
            onPress={() => this.changeColor()}>
           <MaterialCommunityIcons style={styles.icons} name="music-note-outline" size={24} color="black" />
            <Text style={styles.text}>Musique active</Text> 
          </Pressable>

          <Pressable  style={{backgroundColor: this.state.backSound, marginLeft:30,borderRadius:50,width:300,height:60,marginTop:20,justifyContent:'center',alignItems:'center',}}  onPress={() => this.changeSound()}>
            <MaterialIcons style={styles.icons} name="volume-up" size={24} color="black" />
            <Text style={styles.text}>Sound active</Text> 
          </Pressable>
          <View>
          <Pressable  style={{backgroundColor: this.state.background, marginLeft:30,borderRadius:50,width:300,height:60,marginTop:20,justifyContent:'center',alignItems:'center'}} onPress={() => this.change()}>
            
            <MaterialIcons style={styles.icons} name="notifications-none" size={24} color="black" />
            <Text style={styles.text}>Notifications active</Text> 
          </Pressable>
          </View>
          <Pressable  style={styles.button_container}>
            <Fontisto style={styles.icons} name="world-o" size={24} color="black" />
            <Text style={styles.text}>Language : English</Text> 
          </Pressable>

          <Pressable style={{backgroundColor: this.state.Progress, marginLeft:30,borderRadius:50,width:300,height:60,marginTop:20,justifyContent:'center',alignItems:'center'}} onPress={() => this.changeProgression()} 
            >
            <MaterialCommunityIcons style={styles.icons} name="lock-reset" size={24} color="black" />
            <Text style={styles.text}>Progression of Game</Text> 
          </Pressable>

          <Pressable style={{backgroundColor: this.state.test, marginLeft:30,borderRadius:50,width:300,height:60,marginTop:20,justifyContent:'center',alignItems:'center'}} onPress={() => this.changeTest()}
            >
            <AntDesign style={styles.icons} name="staro" size={24} color="black" />
            <Text style={styles.text}>Test us</Text> 
          </Pressable>

            <Pressable style={{backgroundColor: this.state.back, marginLeft:30,borderRadius:50,width:300,height:60,marginTop:20,justifyContent:'center',alignItems:'center'}} onPress={() => this.changePrivacy()}
              >
              <Ionicons style={styles.icons} name="md-lock-closed-outline" size={24} color="black" />
              <Text style={styles.text}>Privacy Policy</Text> 
            </Pressable>

      </View>
    </View>
  )
}
}

const styles = StyleSheet.create({
image:{
  width:360,
  height:750,
  position:'absolute'
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
icons:{
  position:'absolute',
  paddingRight:240,
  paddingTop:7
},
first_button:{
  width:300,
  height:60,
  marginTop:20,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#F2B90F',
  marginLeft:30,
  borderRadius:50
},
button_container:{
  width:300,
  height:60,
  marginTop:20,
  justifyContent:'center',
  alignItems:'center',
 backgroundColor:'#5198E8',
  marginLeft:30,
  borderRadius:50
}
})
export default Setting
