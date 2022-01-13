import moment from 'moment-timezone';
import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'

export default function WheatherData({list}){
    return(
        <>{list.map((object,index)=>(
        <View>
            <View style={styles.view} key={index}>
                <View style={{flexDirection:"row"}}>
                    <Image source={{uri:`https://openweathermap.org/img/wn/${object.weather[0].icon}@2x.png`}} style={styles.image} />
                    <View>
                        <Text style={styles.Day} >{moment(object.dt*1000).format('dddd')}</Text>
                        <Text style={styles.Temp}>Night {object.temp.night}&#176;C</Text>
                        <Text style={styles.Temp}>Day {object.temp.day}&#176;C</Text>
                        <Text style={styles.Temp}>{object.weather[0].main}</Text>
                    </View>
                </View>
                <View style={{flexDirection:"column"}}>
                    <View style={{flexDirection:"row",alignSelf:"baseline"}}>    
                        <View style={styles.ItemsContainer}>
                            <Text style={{color:"gray",textAlign:"auto"}}>Temperature Values</Text>
                            <Text style={styles.Temp}>Min {object.temp.min}&#176;C</Text>
                            <Text style={styles.Temp}>Max {object.temp.max}&#176;C</Text>
                            <Text style={styles.Temp}>Evening {object.temp.eve}&#176;C</Text>
                            <Text style={styles.Temp}>Morn {object.temp.morn}&#176;C</Text>
                        </View>
                        <View style={styles.ItemsContainer}>
                            <Text style={{color:"gray",textAlign:"auto"}} >Feels Like</Text>
                            <Text style={styles.Temp}>Day {object.feels_like.day}&#176;C</Text>
                            <Text style={styles.Temp}>Night {object.feels_like.night}&#176;C</Text>
                            <Text style={styles.Temp}>Evening {object.feels_like.eve}&#176;C</Text>
                            <Text style={styles.Temp}>Morning {object.feels_like.morn}&#176;C</Text>
                        </View>
                    </View>
                    <View style={styles.ItemsContainer} >
                        <Text style={{color:"gray",textAlign:"auto"}} >Details</Text>
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
        color:"#F8FBFF",
        padding:10,
        textAlign:"auto",
        height:80
    },
    image:{
        height:200,
        width:200
    },
    view:{
        alignItems:"center",
        padding:15
    },
    ItemsContainer:{
        padding:10,
        margin:10
    },
    Temp:{
        color:"#F8FBFF",
        fontSize:15,
        fontWeight:"100",
        textAlign:"auto"

    }
});