import "react-native-gesture-handler";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CheckIn from "./screens/CheckInScreen";
import CreateWorkoutName from "./screens/CreateWorkoutScreens/WorkoutNameScreen";
import AddExercisesScreen from "./screens/CreateWorkoutScreens/AddExercisesScreen";
import { NavigationContainer } from "@react-navigation/native";
import store from "./store";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerBackVisible: false }}
          />
          <Stack.Screen
            name="CheckIn"
            component={CheckIn}
            options={{ headerBackVisible: false }}
          />
          <Stack.Screen
            name="CreateWorkoutName"
            component={CreateWorkoutName}
          ></Stack.Screen>
          <Stack.Screen
            name="AddExercisesScreen"
            component={AddExercisesScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
