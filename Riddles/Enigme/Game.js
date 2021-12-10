import  React from 'react'
import {View, Image, Text,StyleSheet, TextInput, Pressable} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import background from '../Affichage/Image/background.jpg'
import Question from '../Question/Question'
import './Script.js'

var i = parseInt(Math.random()*10)


export default class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      j:0,
      reponse:'',
      question: Question.[i].item,
      score:0
    }
    this.submit = this.submit.bind(this)
    this.continue = this.continue.bind(this)
 }
  
  submit(){
     console.log(this.state.reponse)
     console.log(Question.[i].response)
   if(this.state.reponse === Question.[i].response){
     this.setState({
        reponse: 'Your answer is true'
      });  
    }
    else{
      this.setState({
        reponse: 'Your answer is false'
      });
      
    }
  }

  continue(){
    if(this.state.reponse === 'Your answer is true'){
       i = i+1
     this.setState({
        reponse: ''
    })

          
    }
    else{
      i=i+1
      this.setState({
        reponse: ''
      })
      
    }
  }


  
  render(){
    const { goBack } = this.props.navigation;
      return (
        <View>
          <View>
              <View>
                <Image style={styles.image} source={background} />
              </View>

                <View style={styles.container}>
                  <MaterialIcons name="navigate-before" onPress={() => goBack('Play')} style={styles.icons} size={34} color="#F2BB13" />
                  <Text style={styles.text}>Enigme #1</Text>
              </View>

              <View>
                <Text style = {styles.question}>{Question.[i].item}</Text>

                  <View style={styles.textAreaContainer}>
                    <TextInput
                      style={styles.textArea}
                      placeholder="Type something"
                      placeholderTextColor="white"
                      numberOfLines={3}
                      multiline={true}
                      value={this.state.reponse}
                     onChange={e => this.setState({reponse: e.target.value})}
                    />
                  </View>

                  <View>
                     <Pressable style={styles.submit} onPress={this.submit}><Text>Submit</Text></Pressable>
                     <Pressable style={styles.continue} onPress={this.continue}><Text>continue</Text></Pressable>
                  </View>
              </View>
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
textAreaContainer: {
    padding: 5,
    width:180,
    backgroundColor:'#9351BF',
    height:100,
    margin:90,
    borderRadius:20
  },
  textArea: {
    justifyContent: "flex-start",
    color:'white',
    padding:20,
    fontWeight:'bold',
    fontSize:18
  },
  question:{
    alignItems:'center',
    justifyContent:'flex-start',
    color: 'white',
    fontWeight:'bold',
    margin:50,
    fontSize:15
  },
  submit:{
    height:50,
    width:100,
    backgroundColor: '#F2B90F',
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50
  },
  continue:{
    height:50,
    width:100,
    backgroundColor: '#F2B90F',
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:240,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    position:'absolute'
  }
})

