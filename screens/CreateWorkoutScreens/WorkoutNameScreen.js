import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../fribase";
import { useSelector } from "react-redux";

const CreateWorkoutName = () => {
  const [name, setName] = useState("");
  const user = useSelector((state) => state.user.value);

  const addWorkoutToDB = () => {
    addToDB();
    console.log(name);
  };

  const addToDB = async () => {
    console.log("/Users/" + user.uid + "/WorkoutPlans");
    await setDoc(doc(db, "/Users/" + user.uid + "/WorkoutPlans", name), {
      exercise: "bench",
    });
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text>Enter Workout Name</Text>
      <TextInput
        placeholder={"Name"}
        value={name}
        onChangeText={(text) => setName(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={addWorkoutToDB}>
        <Text>Weiter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateWorkoutName;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "#639a00",
  },
});
