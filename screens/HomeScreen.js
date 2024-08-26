import React from "react"
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native"
import tw from 'twrnc';
import NavOptions from "../components/NavOptions";
function HomeScreen({ }) {
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