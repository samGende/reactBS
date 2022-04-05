import { TouchableOpacity, Text } from "react-native";

const AddExerceise = (props) => {
  const handlePress = () => {
    console.log(props.name);
  };
  return (
    <TouchableOpacity
      style={{
        width: "80%",
        backgroundColor: "#639a00",
      }}
      onPress={handlePress}
    >
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default AddExerceise;
