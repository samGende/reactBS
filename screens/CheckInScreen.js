import { useNavigation } from '@react-navigation/core'
import {View, Text, TouchableOpacity} from 'react-native'

const CheckInScreen = () => {

    const navigator = useNavigation()
    return (
        <View>

            <Text>CheckIn</Text>
            <TouchableOpacity onPress={navigator.replace("Home")}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View> 
        
    )
}

export default CheckInScreen