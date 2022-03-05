import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TimeDisplay from "../Components/timeDisplay";

const CheckIn = () => {
  const [timeIn, setTimeIn] = useState();
  const [text, setText] = useState("CheckIn");
  const [hourIn, setHourIn] = useState();
  const [minuteIn, setMinuteIn] = useState();

  const navigation = useNavigation();
  const back = () => {
    navigation.navigate("Home");
  };

  const handleTimeIn = () => {
    if (timeIn) {
      console.log("checkingout");
    } else {
      const today = new Date();
      setTimeIn(today.getTime());
      setHourIn(today.getHours());
      setMinuteIn(today.getMinutes());
      setText("CheckOut");
    }
  };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <TimeDisplay hours={hourIn} minutes={minuteIn} style={{ flex: 1 }} />
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
