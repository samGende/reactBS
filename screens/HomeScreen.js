import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {getDocs, doc, collection} from 'firebase/firestore'
import {auth} from '../fribase'
import {db} from '../fribase'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [data, setData] = useState([]);

  const workoutCollection = collection(db, 'Workouts')

  useEffect(() => {
      const getWorkouts = async() => {
          const workouts = await getDocs(workoutCollection);
          setData(workouts.docs.map((doc) => ({...doc.data(), id: doc.id})))

    }
    getWorkouts();
    console.log(data);
  })

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


  
 
 

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      {data.map((workout) => {
          return <Text>Workout {workout.day}</Text>
      })}
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#000000',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})