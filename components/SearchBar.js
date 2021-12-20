import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar({cityHandler}) {
    return (
        <View style={{marginTop:15,flexDirection:"row"}}>
            <GooglePlacesAutocomplete
                query={{key:"AIzaSyCrZYBcCfzKMqJuTEJSwxIihWZzniBPlCg"}}
                onPress={(data,details=null)=>{
                    console.log(data.description);
                    const abc = data.description.split(',')[0];
                    cityHandler(abc);
                }}
                placeholder="search"
                styles={{
                    textInput:{
                        backgroundColor:"#eee",
                        borderRadius:20,
                        fontWeight:"700",
                        marginTop:7,
                    },
                    textInputContainer:{
                        backgroundColor:"#eee",
                        borderRadius:50,
                        flexDirection:"row",
                        alignItems:"center",
                        marginRight:10,
                    }
                }}
                renderLeftButton={()=>(
                    <View style={{marginLeft:10}}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={()=>(
                    <View style={{
                            flexDirection:"row",
                            marginRight:10,
                            backgroundColor:"white",
                            borderRadius:30,
                            padding:10,
                            alignItems:"center"
                        }}
                    >
                        <AntDesign name="clockcircle" size={11} />
                        <Text style={{marginLeft:8}}>Search</Text> 
                    </View>
                )}
            />
        </View>
    );
}