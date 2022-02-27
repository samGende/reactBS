import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import PizzaTranslator from './Inputs'
import  hspLogo from './assets/hsp.png'
import { useEffect, useState } from 'react';
import {auth} from './fribase.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export default function App() {

  const[email, setEmail] = useState();
  const[password, setPassword] = useState();


  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     console.log('Registered with ' + user.email)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('signed in with ' + user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  return (
    <View style={styles.container}>
      <Image source={hspLogo} style={styles.hspLogo}/>
      <Text style={styles.text}>FFW</Text>
      <StatusBar style="auto" />
  
       <Text style={styles.text}>Email</Text>
       <TextInput
       style={{height:40}}
       onChangeText={text => setEmail(text)}
       ></TextInput>

       <Text style={styles.text}>Password</Text>
       <TextInput
       style={{height:40}}
       onChangeText={text => setPassword(text)}
       ></TextInput>

      <TouchableOpacity 
      onPress={handleLogin}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={handleSignUp}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Register</Text>
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
    margin:10,
    backgroundColor:'#13f702',
    padding: 10
  },
  buttonText:{
    color: '#000000'
  }


});
