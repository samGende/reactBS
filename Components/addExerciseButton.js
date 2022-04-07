import { TouchableOpacity, Text } from "react-native";

const AddExerciseButton = (props) => {
  return (
    <TouchableOpacity>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default AddExerciseButton;
