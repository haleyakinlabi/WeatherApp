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
      title="Go to Search"
      onPress={() => navigation.navigate('Search')}/> 
      <Button
      title="State Capitals"
      onPress={() => navigation.navigate('StateCapitals')}/>
    </View>
  );
}

function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="<" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Text>Search</Text>
    </View>
  );
}

function StateCapitals({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="<" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <PopularCities/>
      <Text>...</Text>
    </View>
  )
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
        name="Search" 
        component={SearchScreen} 
        />
        <Stack.Screen 
        name="StateCapitals"
        component={StateCapitals}/>
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