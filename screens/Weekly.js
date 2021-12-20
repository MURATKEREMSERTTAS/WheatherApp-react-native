import React,{useEffect, useState} from 'react'
import { View,ActivityIndicator, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import WheatherData from '../components/home/WeatherData'
import BottomTabs from '../components/BottomTabs'

const Api_Key="02abc8a84f7069b3d7322ccd33235e3b"
export default function Home({navigation}) {
    const [abc,setCity] = useState("Edirne");
    const [weatherData,setWeatherData]=useState(null)
    const [loaded,setLoaded]=useState(true)
    
    async function getDataFromOpenWeatherMapApi(abc){
        setLoaded(false);
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${abc}&units=metric&cnt=10&appid=${Api_Key}`) 
            if(res.status==200){
            const data = await res.json();
            setWeatherData(data);
            }
            else{
                setWeatherData(null);
            }
            setLoaded(true)
        } catch (error) {
            console.log(error)
        }
        
        
        
    }
    
    useEffect(()=>{getDataFromOpenWeatherMapApi(abc)},[abc])

    if(!loaded){
        return(
            <View style={{flex:1,backgroundColor:"#eee",marginTop:"8%"}} >
                <ActivityIndicator color="gray" size={36}/>
            </View>
        )
    }
    else if(weatherData===null){
        return(
            <View>
            </View>
        )
    }
    const {list}=weatherData;
    //const {coord:{lon,lat},name}=city;
    //const [{},list2:{}]=list;
    //console.log(icon);
    return (
        <View style={{flex:1,backgroundColor:"#eee",marginTop:"8%"}} >
            <View style={{marginHorizontal:5,marginVertical:10,height:"90%"}} >
            <SearchBar cityHandler={setCity} />
            <ScrollView horizontal style={{paddingHorizontal:34}} >
                    <WheatherData list={list}/>
            </ScrollView>
            </View>
            <View >
                <BottomTabs navigation={navigation} />
            </View>
        </View>
    )
}
