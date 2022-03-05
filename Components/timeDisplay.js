import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const TimeDisplay = (props) => {
  const [date, setDate] = useState("");

  const today = new Date();
  useEffect(() => {
    if (props.hours) {
      console.log("hours");
    } else {
      console.log(today.getHours());
      setDate(today);
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.hours}>
        {props.hours}:{props.minutes}
      </Text>
      <Text style={styles.label}>Aktives Zeit dieses Woche</Text>
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
