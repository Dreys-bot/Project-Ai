import React from 'react'
import {View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Affichage from './components/Affichage/Affichage'
import Params from './components/Parametres/Params'
import Play from './components/Jouer/Play'
import Setting from './components/Setting/Setting'
import Game from './components/Enigme/Game'

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Home"
          component={Affichage}
          
        />
        <Stack.Screen name="Params" component={Params} />
        
        <Stack.Screen name="Play" component={Play} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Game" component={Game} />
        
      </Stack.Navigator>
    </NavigationContainer>

    
    
  );
};

export default App
