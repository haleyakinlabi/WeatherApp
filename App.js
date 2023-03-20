import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import PopularCities from "./screens/PopularCities";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





function HomeScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}/> 
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button 
      title="Go to Details ...again"
      onPress={() => navigation.navigate('Details')}/> 
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{title: 'Overview'}} 
        />
        <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default App;