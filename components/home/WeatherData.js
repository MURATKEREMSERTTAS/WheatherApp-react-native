import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'


const days=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"]

export default function WheatherData({list}){
    const [{temp:{day,night}}]=list;
    const[date,setDate]=useState("")
    useEffect(()=>{
        setInterval(()=>{
            const time = new Date();
            const dayy = time.getDay();
            setDate(days[dayy])
        },1000)
    },[])
    const img=require("../../assets/weather.png")
    return(
        <>{list.map((object,index)=>(
        <View>
            <View style={styles.view} key={index} style={{flexDirection:"column"}}>
                <View style={{flexDirection:"row"}}>
                    <Image source={img} style={styles.image}/>
                    <View>
                        <Text style={styles.Day} >{object.dt}</Text>
                        <Text style={styles.Temp}>Night {object.temp.night}&#176;C</Text>
                        <Text style={styles.Temp}>Day {object.temp.day}&#176;C</Text>
                        <Text style={styles.Temp}>{object.weather.description}</Text>
                    </View>
                </View>
                <View style={{flexDirection:"column"}}>
                    <View style={{flexDirection:"row",alignSelf:"baseline"}}>    
                        <View style={{alignItems:"center"}}>
                            <Text>Temperature Values</Text>
                            <Text style={styles.Temp}>Min {object.temp.min}&#176;C</Text>
                            <Text style={styles.Temp}>Max {object.temp.max}&#176;C</Text>
                            <Text style={styles.Temp}>Evening {object.temp.eve}&#176;C</Text>
                            <Text style={styles.Temp}>Morn {object.temp.morn}&#176;C</Text>
                        </View>
                        <View style={{alignItems:"center",}}>
                            <Text>Feels Like</Text>
                            <Text style={styles.Temp}>Day {object.feels_like.day}&#176;C</Text>
                            <Text style={styles.Temp}>Night {object.feels_like.night}&#176;C</Text>
                            <Text style={styles.Temp}>Evening {object.feels_like.eve}&#176;C</Text>
                            <Text style={styles.Temp}>Morning {object.feels_like.morn}&#176;C</Text>
                        </View>
                    </View>
                    <View style={{alignItems:"flex-start",}} >
                        <Text style={styles.Temp}>Wind Speed {object.speed}m/s</Text>
                        <Text style={styles.Temp}>Wind Direction {object.deg}&#176;</Text>
                        <Text style={styles.Temp}>Wind Gust {object.gust}m/s</Text>
                        <Text style={styles.Temp}>Cloudiness %{object.clouds}</Text>
                        <Text style={styles.Temp}>Probability Of Precipitation {object.pop}</Text>
                    </View>
            </View>
            </View>
            
        </View>))}
        </>
    )
};
const styles = StyleSheet.create({
    Day:{
        fontSize:40,
        fontWeight:"200",
        backgroundColor:"gray",
        color:"white",
        padding:10,
        textAlign:"center",
        borderRadius:50,
        height:80
    },
    Temp:{
        fontSize:20,
        color:"gray",
        fontWeight:"100",
        textAlign:"center",
    },
    image:{
        resizeMode:"center",
        height:200,
        width:200
    },
    view:{
        alignItems:"center",
    }
});