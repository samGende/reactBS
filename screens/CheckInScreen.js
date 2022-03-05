import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TimeDisplay from "../Components/timeDisplay";

const CheckIn = () => {
  const [timeIn, setTimeIn] = useState();
  const [text, setText] = useState("CheckIn");

  const navigation = useNavigation();
  const back = () => {
    navigation.navigate("Home");
  };

  const today = new Date();

  const handleTimeIn = () => {
    setTimeIn(today.getTime());
    setText("CheckOut");
  };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <TimeDisplay style={{ flex: 1 }} />
      <TouchableOpacity style={{ flex: 1 }} onPress={handleTimeIn}>
        <Text>{text}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1 }} onPress={back}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CheckIn;
