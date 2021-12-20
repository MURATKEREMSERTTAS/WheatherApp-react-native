import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs({navigation}) {
    return (
        <View style={{
                flexDirection:"row",
                margin:10,
                marginHorizontal:30,
                justifyContent:"space-between"}}
            >
            <Icon icon="home" text="Home" navigation={navigation}  />
            <Icon icon="calendar" text="Weekly" navigation={navigation} />
            
        </View>
    )
}



const Icon =(probs)=>(
        <TouchableOpacity
        onPress={()=>probs.navigation.navigate(probs.text)}>
            <View>
                <FontAwesome5 
                name={probs.icon}
                size={25}
                style={{
                    alignSelf:"center"
                }} />
                <Text>{probs.text}</Text>
            </View>
        </TouchableOpacity>
);
