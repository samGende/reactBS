import { TouchableOpacity, View } from "react-native";
import AddExerciseButton from "../../Components/addExerciseButton";
const AddExercisesScreen = () => {
  return (
    <View>
      <AddExerciseButton name="Benchpress"></AddExerciseButton>
      <AddExerciseButton name="Militarypress"></AddExerciseButton>
      <AddExerciseButton name="Curls"></AddExerciseButton>
      <AddExerciseButton name="Squat"></AddExerciseButton>
      <AddExerciseButton name="Deadlift"></AddExerciseButton>
      <AddExerciseButton name="Lat Pull-Down"></AddExerciseButton>
      <AddExerciseButton name="Dips"></AddExerciseButton>
      <AddExerciseButton name="Incline Benchpress"></AddExerciseButton>
      <AddExerciseButton name="Rows"></AddExerciseButton>
    </View>
  );
};

export default AddExercisesScreen;
