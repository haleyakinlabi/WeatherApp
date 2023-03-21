import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
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
          style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Longitude"
          onChangeText={(text) => setLongitude(text)}
          value={longitude}
          style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10 }}
        />
        <Button
          title="Search"
          onPress={getWeatherData}
        />
        {weatherData && (
          <View>
            <Text>Date/Time: {weatherData.current_weather.time}</Text>
            <Text>Temperature: {weatherData.current_weather.temperature}</Text>
            <Text>Weather Code: {weatherData.current_weather.weathercode}</Text>
            <Text>Wind Speed: {weatherData.current_weather.windspeed}</Text>
           
            
          </View>
        )}
      </View>
    );
  };
  
  export default SearchTemp;
  