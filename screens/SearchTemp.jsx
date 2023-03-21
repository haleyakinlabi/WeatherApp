import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import axios from 'axios'

const SearchTemp = () => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [weatherData, setWeatherData] = useState(null)
  
    const getWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
        setWeatherData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  
    return (
      <View>
        <TextInput
          placeholder="Latitude"
          onChangeText={(text) => setLatitude(text)}
          value={latitude}
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Longitude"
          onChangeText={(text) => setLongitude(text)}
          value={longitude}
          style={styles.TextInput}
        />
        <Button
          title="Search"
          onPress={getWeatherData}
        />
        {weatherData && (
          <View style={styles.View}>
            <Text style={styles.Text}>Date/Time: {weatherData.current_weather.time}</Text>
            <Text style={styles.Text}>Temperature: {weatherData.current_weather.temperature} °C</Text>
            <Text style={styles.Text}>Weather Code: {weatherData.current_weather.weathercode}</Text>
            <Text style={styles.Text}>Wind Speed: {weatherData.current_weather.windspeed}</Text>
          </View>
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    TextInput: {
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10,
        borderColor: 'black',
        borderRadius: 20,
        width: 150,
        fontFamily: "Verdana",
      },
    Text: {
        fontFamily: 'Futura',
        fontSize: 20, 
    },
    View: {
        gap: 10, 
        marginTop: 20,
    }   
})
  
  export default SearchTemp;
  