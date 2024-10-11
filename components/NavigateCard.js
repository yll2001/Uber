import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
const GOOGLEG = 'AIzaSyDry9z2YsGp2m8iknZcOyyRsRD7UxpqbhI';

function NavigateCard() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>

            <Text style={tw`bg-white text-center  text-xl`}>Good Morning!</Text>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'position' : 'height'}
                style={{ flexGrow: 1 }}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
                <View style={tw`border-t border-gray-200 flex-shrink`}>
                    <View>
                        <GooglePlacesAutocomplete
                            style={toInputBoxStyles.search}
                            placeholder="Where to?"
                            nearbyPlacesAPI="GooglePlacesSearch"
                            debounce={400}
                            fetchDetails={true}
                            enablePoweredByContainer={false}
                            query={{
                                key: GOOGLEG,
                                language: 'en',
                            }}
                            onPress={(data, details = null) => {
                                Keyboard.dismiss
                                dispatch(setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                }));
                                navigation.navigate('RideOptionsCard');
                            }}
                            styles={toInputBoxStyles}
                        />
                    </View>
                    <NavFavourites />
                </View>
                <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>

                    <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`} m onPress={() => navigation.navigate("RideOptionsCard")}>
                        <Icon name="car" type="font-awesome" color="white" size={16} />
                        <Text style={tw`text-white text-center`}>Rides</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={tw`flex flex-row justify-between  w-24 px-4 py-3 rounded-full`}>
                        <Icon name="fast-food-outline" type="ionicon" color="black" size={20} />
                        <Text style={tw`text-center`}>Eats</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
        borderRadius: 10,
    },
    search: {
        borderRadius: 10,
    }
});
