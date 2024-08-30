import { View, Text } from "react-native";
import tw from 'twrnc'
import Map from "../components/Map";


function MapScreen() {
    return (
        <View>
            <Text>This is the MapScreens </Text>

            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}></View>
        </View>
    )
}

export default MapScreen