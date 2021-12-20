import React,{useEffect, useState} from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'

const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const days=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"]

const DateTimeItems = ({title,unit,value})=>{
    return(
    <View style={styles.DateTimeItems_View}>
        <Text style={styles.DateTimeItems_Title} >{title}</Text>
        <Text style={styles.DateTimeItems_Title} >{value}{unit}</Text>
    </View>
    );
}

export default function DateTime({weatherData}){
    const[date,setDate]=useState("")
    const[time,setTime]=useState("")
    const {city,list}=weatherData;
    const {coord:{lon,lat},name}=city;
    const [{pressure,humidity}]=list;

    

    useEffect(()=>{
        setInterval(()=>{
            const time = new Date();
            const month= time.getMonth();
            const date= time.getDate();
            const day = time.getDay();
            const hour= time.getHours();
            const hourAmPmFormat= hour>=13?hour%12:hour;
            const minute= time.getMinutes();
            const ampm=hour>=12?"PM":"AM";

             setTime(
                 (hourAmPmFormat<10?'0'+hourAmPmFormat:hourAmPmFormat)
                 +":"+(minute<10?"0"+minute:minute)
                 +" "+ampm)

            setDate(days[day]+','+date+' '+months[month]) 
        },1000)
    },[])
    return (
        <View style={styles.Container} >
            <View>
                <View>
                    <Text style={styles.DateTime_Time} >{time}</Text>
                </View>
                <View>
                    <Text style={styles.DateTime_Date} >{date}</Text>
                </View>
                <View style={styles.ItemsContainer} >
                    <DateTimeItems title="Humidty" value={humidity} unit="%" />
                    <DateTimeItems title="Pressure" value={pressure} unit="hPA" />
                </View>
            </View>
            <View style={styles.RigthContainer} >
                <Text style={styles.TimeZone}>{name} </Text>
                <Text style={styles.Coordinate}>{lat} {lon}</Text>
            </View>
        </View>
        
    );
}

const styles= StyleSheet.create({
    Container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15,
    },
    DateTime_Time:{
        fontSize:45,
        color:"black",
        fontWeight:"100"
    },
    DateTime_Date:{
        fontSize:25,
        color:"gray",
        fontWeight:"300"
    },
    RigthContainer:{
        textAlign:"right",
        marginTop:20
    },
    TimeZone:{
        fontSize:20,
        color:"black"
    },
    Coordinate:{
        fontSize:16,
        color:"black",
        fontWeight:"700",
    },
    ItemsContainer:{
        backgroundColor:"gray",
        backfaceVisibility:"visible",
        borderRadius:10,
        padding:10,
        marginTop:10
    },
    DateTimeItems_View:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    DateTimeItems_Title:{
        color:"white",
        fontSize:15,
        fontWeight:"100"

    }
})

