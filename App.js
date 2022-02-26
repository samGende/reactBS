import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import PizzaTranslator from './Inputs'
import  hspLogo from './assets/hsp.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={hspLogo} style={styles.hspLogo}/>
      <Text style={styles.text}>FFW</Text>
      <StatusBar style="auto" />
  
       <PizzaTranslator label='Username'></PizzaTranslator>
       <PizzaTranslator label='Passwort'></PizzaTranslator>

      <TouchableOpacity 
      onPress={() => alert('Login')}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hspLogo:{
    width:100, 
    height:100
  },
  text:{
    color: '#13f702', 
    fontSize: 28
  },
  button: {
    backgroundColor:'#13f702',
    padding: 10
  },
  buttonText:{
    color: '#000000'
  }


});
