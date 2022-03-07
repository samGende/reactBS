import { getRedirectResult } from "@firebase/auth";
import { connectFirestoreEmulator } from "@firebase/firestore";
import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TimeDisplay from "../Components/timeDisplay";
import { checkIn } from "../reducers/time";

const CheckIn = () => {
  const [checkInText, setCheckInText] = useState("CheckIn");
  const [checkedIn, setCheckedIn] = useState(false);

  const time = useSelector((state) => state.time.value);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    if (time.time != 0) {
      setCheckedIn(true);
      setCheckInText("CheckOut");
    }
  });

  const back = () => {
    navigation.navigate("Home");
  };

  const calcActiveTime = () => {
    const clock = new Date();
    const endTime = clock.getTime();
    const day = clock.getDate();
    const month = clock.getMonth();
    const year = clock.getUTCFullYear();
    const difference = endTime - time.time;
    let seconds = difference / 1000;
    let minutes = seconds / 60;
    const hours = minutes / 60;
    minutes = minutes % 60;
    seconds = seconds % 60;
    const timeToDB = {
      day: day,
      month: month,
      year: year,
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds),
    };

    console.log(timeToDB);
  };

  const handleTimeIn = () => {
    const clock = new Date();
    if (time.time != 0) {
      calcActiveTime();
      dispatch(checkIn({ time: 0, hours: 0, minutes: 0 }));
      setCheckedIn(false);
      setCheckInText("CheckIn");
    } else {
      setCheckInText("Checkout");
      setCheckedIn(true);
      dispatch(
        checkIn({
          time: clock.getTime(),
          hours: clock.getHours(),
          minutes: clock.getMinutes(),
        })
      );
    }
  };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <TimeDisplay
        hours={time.hours}
        minutes={time.minutes}
        label={"Check in Zeit"}
        style={{ flex: 1 }}
      />
      <TouchableOpacity style={{ flex: 1 }} onPress={handleTimeIn}>
        <Text>{checkInText}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1 }} onPress={back}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CheckIn;
