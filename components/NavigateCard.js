
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const GOOGLEG = 'AIzaSyDry9z2YsGp2m8iknZcOyyRsRD7UxpqbhI';

function NavigateCard() {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1 mt--10`}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
                <Text style={tw`text-center py-5  text-xl`}>Good Morning!</Text>
                <View style={tw`border-t border-gray-200 flex-shrink`}>
                    <View>
                        <GooglePlacesAutocomplete
                            placeholder="Where to?"
                            nearbyPlacesAPI="GooglePlacesSearch"
                            debounce={400}
                            fetchDetails={true}
                            enablePoweredByContainer={false}
                            query={{
                                key: GOOGLEG,
                                language: 'en'
                            }

                            }
                            onPress={(data, details = null) => {
                                dispatch(setDestination({
                                    locattion: details.geometry.location,
                                    description: data.description
                                }))
                                navigation.navigate('RideOptionCard');
                            }}
                            styles={toInputBoxStyles}
                        />
                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

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
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})