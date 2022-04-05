import { Text, ScrollView, View, StyleSheet } from "react-native";

import AddExerceise from "../../Components/addExercise";

const AddExercisesScreen = () => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView style={{ height: 400, paddingVertical: 10 }}>
        <AddExerceise name="Kniebeuge" style={styles.exercises}></AddExerceise>
        <AddExerceise name="Kreuzheben" style={styles.exercises}></AddExerceise>
        <AddExerceise
          name="Bankdrucken"
          style={styles.exercises}
        ></AddExerceise>
        <AddExerceise
          name="Schulterdrucken"
          style={styles.exercises}
        ></AddExerceise>
        <AddExerceise name="Rudern" style={styles.exercises}></AddExerceise>
        <AddExerceise
          name="Schulterpresse"
          style={styles.exercises}
        ></AddExerceise>
        <AddExerceise
          name="Latzug Kabel"
          style={styles.exercises}
        ></AddExerceise>
        <AddExerceise name="Butterfly" style={styles.exercises}></AddExerceise>
        <AddExerceise
          name="Butterfly Reverse"
          style={styles.exercises}
        ></AddExerceise>
        <AddExerceise name="Dips" style={styles.exercises}></AddExerceise>
      </ScrollView>
    </View>
  );
};

export default AddExercisesScreen;

const styles = StyleSheet.create({
  exercises: {},
});
