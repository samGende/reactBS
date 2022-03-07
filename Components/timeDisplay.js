import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const TimeDisplay = (props) => {
  const [date, setDate] = useState(new Date());
  const [hours, sethours] = useState("");
  const [minutes, setMinutes] = useState("");

  useEffect(() => {
    if (props.hours == 0) {
      sethours(date.getHours());
      setMinutes(date.getMinutes());
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    } else {
      sethours(props.hours);
      setMinutes(props.minutes);
    }
  });

  function refreshClock() {
    setDate(new Date());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.hours}>
        {hours}:{minutes}
      </Text>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
};

export default TimeDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hours: {
    fontSize: 60,
  },
  label: {
    fontSize: 18,
  },
});
