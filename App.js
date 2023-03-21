import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from "react-native";
import PopularCities from "./screens/PopularCities";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from "./screens/Logo";





function HomeScreen({ navigation }) {
  
  return (
    <SafeAreaView style={styles.container}>
      <Logo/>
      
      <View style={styles.container2}>
        <Button 
        title="Search"
        onPress={() => navigation.navigate('Search')}/> 
        <Button
        title=" US State Capitals"
        onPress={() => navigation.navigate('StateCapitals')}/>
      </View>


    </SafeAreaView>
  );
}

function SearchScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Logo/>
    
    
      <View style={styles.container2}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>

    </SafeAreaView>
  );
}

function StateCapitals({ navigation }) {
  return (
    
    <SafeAreaView style={styles.container}>
      <Logo/>

      <View style={styles.container2}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.PopularCities}>
        <Image source={require("./assets/arrow.png")}style={styles.arrow}/>
        <PopularCities/>
      </View>
    </SafeAreaView>
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
  },
  logo:{
    marginTop: 0,
  },
  container2: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PopularCities:{
    marginBottom: '50%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  arrow: {
    height: 30,
    width: 30,
  }
});


export default App;