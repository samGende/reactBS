import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CheckInScreen from './screens/CheckInScreen'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />

        <Stack.Screen name="CheckIn" component={CheckInScreen} options={{headerBackVisible: true}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerBackVisible:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});