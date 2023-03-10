import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import WeatherComponent from './cities/NewYork';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>WeatherApp</Text>
      <WeatherComponent></WeatherComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
