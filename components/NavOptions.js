import { View, Text, FlatList, TouchableOpacity, Image } from "react-native"
import { Icon } from "react-native-elements";
import tw from 'twrnc';


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "http://links.papareact.com/3pn",
        screen: "Mapscreen",
    },
    {
        id: "456",
        title: "Oder food",
        image: "http://links.papareact.com/28w"
    }

]


const NavOptions = () => {
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                        <Image style={{ width: 120, height: 120, resizeMode: "contain" }} source={{ uri: item.image }} />
                    </View>
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright"
                        color="white"
                        type="antdesign"
                    />
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions;