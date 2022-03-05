import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import { getDocs, doc, collection } from "firebase/firestore";
import { auth } from "../fribase";
import { db } from "../fribase";
import TimeDisplay from "../Components/timeDisplay";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  /*
  const workoutCollection = collection(db, 'Workouts')

  useEffect(() => {
    const getWorkouts = async () => {
      const workouts = await getDocs(workoutCollection);
      setData(workouts.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }
    getWorkouts();
  })
*/
  navigation.setOptions({
    headerRight: () => <Button title="Logout" onPress={handleSignOut} />,
  });
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const handleCheckIn = () => {
    navigation.replace("CheckIn");
  };

  return (
    <View style={styles.container}>
      <TimeDisplay hours="3" minutes="45" style={{ flex: 1 }} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons} onPress={handleCheckIn}>
          <Text style={styles.buttonsText}>Check in</Text>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/mycollection/png/001-in-time.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonsText}>Create Workout</Text>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/mycollection/png/002-workout.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonsText}>Progress</Text>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/mycollection/png/003-goal.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonsText}>Record Workout</Text>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/mycollection/png/004-edit.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttons: {
    height: 100,
    width: "90%",
    backgroundColor: "#639a00",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsText: {
    color: "white",
  },
});
