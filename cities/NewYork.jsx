import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const NewYork = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=40.50&longitude=-111.40&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto'
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
        <View>
          <Text>New York, USA</Text>
          <Text>Current temperature: {weatherData.current_weather.temperature} °F</Text>
          <Text>Daily maximum temperature: {weatherData.daily.temperature_2m_max[0]} °F</Text>
          <Text>Daily minimum temperature: {weatherData.daily.temperature_2m_min[0]} °F</Text>
        </View>
      )}
    </View>
  );
};

export default NewYork;





