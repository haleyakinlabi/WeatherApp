import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'

const Logo = () => {
  return (
    <SafeAreaView>
        <Image 
          source={require("../assets/TempLogo.png")} 
          style={styles.Img}
          resizeMode='contain'
        /> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Img: {
        width: 300,
        height: 200,
      },
})


export default Logo