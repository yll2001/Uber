import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from 'twrnc';
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, setTrevaleTimeInformation } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { useEffect, useRef } from "react";


const GOOGLEG = 'AIzaSyDry9z2YsGp2m8iknZcOyyRsRD7UxpqbhI';

function Map() {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin?.location || !destination?.location) return;


        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        });
    }, [origin, destination]);

    if (!origin?.location) {

        return (
            <View style={tw`flex-1 justify-center items-center`}>
                <Text>No origin selected</Text>
            </View>
        );
    }

    useEffect(() => {
        if (!origin || !destination) return;
        const getTravelTime = async () => {
            try {
                const res = await fetch(
                    `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLEG}`
                );
                const data = await res.json();
                dispatch(setTrevaleTimeInformation(data.rows[0].elements[0]));
            } catch (error) {
                console.error("Error fetching travel time:", error);
            }
        };

        getTravelTime();
    }, [origin, destination, dispatch]);

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLEG}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}

            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="Destination"
                    description={destination.description}
                    identifier="destination"
                />
            )}
        </MapView>
    );
}

export default Map;
