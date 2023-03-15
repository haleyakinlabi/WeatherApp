import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const Harrisburg = () => {
  
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=40.27&longitude=-76.88&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto'
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, []);

  

  return (
    <View>
      {weatherData && (
        <View style={styles.Data}>
          <Image style={styles.Img} source={require("../assets/Harrisburg.png")}></Image>
          <Text style={styles.City}>Harrisburg, Pennsylvania</Text>
          <Text style={styles.Temps}>Now: {weatherData.current_weather.temperature} °F</Text>
          <Text style={styles.Temps}>Max: {weatherData.daily.temperature_2m_max[0]} °F</Text>
          <Text style={styles.Temps}>Min: {weatherData.daily.temperature_2m_min[0]} °F</Text>
          <View style={styles.Line}></View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Img: {
    borderRadius: 100,
    overflow: 'hidden',
    width: 200,
    height: 200,
  },
  Data: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    textAlign: 'center',
  }, 
  City:{
    fontSize: 30,
    fontFamily: 'Verdana',
  },
  Temps:{
   fontFamily: 'Futura',
   color:'#595959',
   fontSize: 18,
   textAlign: 'center',
   borderRadius: 50
  },
  Line:{
    backgroundColor: 'black',
    height: 15,
    width: 200,
    borderRadius: 20,
  }
});

export default Harrisburg;