import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../reducers/workout";

const AddExerciseButton = (props) => {
  const dispatch = useDispatch();
  let exercise = useSelector((state) => state.workout);
  const handlePress = () => {
    console.log(exercise);
    dispatch(addExercise(props.name));
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default AddExerciseButton;
const styles = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "#639a00",
    marginBottom: 20,
  },
});
