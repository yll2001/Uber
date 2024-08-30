import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from 'twrnc'
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

function Map() {
    const origin = useSelector(selectOrigin);
    return (
        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }
            }
        />


    )

}
export default Map;