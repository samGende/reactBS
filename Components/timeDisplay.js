import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const today = new Date();
const TimeDisplay = (props) => {
  return (
    <View style={styles.container}>
    <Text style={styles.hours}>{today.getHours()}:{today.getMinutes()}</Text>
    <Text style={styles.label}>Aktives Zeit dieses Woche</Text>
    </View>
  );
}

export default TimeDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hours: {
    fontSize: 60,
  },
  label: {
    fontSize: 18
  }
})