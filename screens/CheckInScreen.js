import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TimeDisplay from "../Components/timeDisplay";
import { checkIn } from "../reducers/time";

const CheckIn = () => {
  const [timeIn, setTimeIn] = useState();
  const [text, setText] = useState("CheckIn");
  const [hourIn, setHourIn] = useState();
  const [minuteIn, setMinuteIn] = useState();

  const time = useSelector((state) => state.time.value);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const back = () => {
    navigation.navigate("Home");
  };

  const handleTimeIn = () => {
    const clock = new Date();
    dispatch(
      checkIn({
        time: 10,
        hours: clock.getHours(),
        minutes: clock.getSeconds(),
      })
    );
  };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <TimeDisplay
        hours={time.hours}
        minutes={time.minutes}
        style={{ flex: 1 }}
      />
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
