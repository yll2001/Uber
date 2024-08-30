import React from "react"
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native"
import tw from 'twrnc';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from '../slices/navSlice';


const GOOGLEG = 'AIzaSyDry9z2YsGp2m8iknZcOyyRsRD7UxpqbhI';

function HomeScreen({ }) {
    const dispatch = useDispatch();



    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height: 100, resizeMode: 'contain'
                    }}
                    source={{

                        uri: "http://links.papareact.com/gzs"
                    }} />

                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description

                        }))
                        dispatch(setDestination(null));

                    }}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLEG,
                        language: "en"
                    }}
                    placeholder="Where From"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}

                />
                <NavOptions />

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    }
})