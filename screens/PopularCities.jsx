import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity } from 'react-native';
import NewYork from '../cities/NewYork';
import Montgomery from '../cities/Montgomery';
import Juneau from '../cities/Juneau';
import Phoenix from '../cities/Phoenix';
import LittleRock from '../cities/LittleRock';
import Sacramento from '../cities/Sacramento';
import Denver from '../cities/Denver';
import Hartford from '../cities/Hartford';
import Dover from '../cities/Dover';
import Tallahassee from '../cities/Tallahassee';
import Atlanta from '../cities/Atlanta';
import Honolulu from '../cities/Honolulu';
import Boise from '../cities/Boise';


const PopularCities = () => {
  const [city, setCity] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity)
    setModalVisible(false)
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={{ padding: 16 }}>
        <Text style={{ fontSize: 18 }}>
          {city ? city : 'Select a city'}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 8 }}>
            <Button title="State Capitals" disabled={true} />
            <Button title="New York" onPress={() => handleCitySelect('New York')} />
            <Button title="Montgomery" onPress={() => handleCitySelect('Montgomery')} />
            <Button title="Juneau" onPress={() => handleCitySelect('Juneau')} />
            <Button title="Phoenix" onPress={() => handleCitySelect('Phoenix')} />
            <Button title="Little Rock" onPress={() => handleCitySelect('Little Rock')} />
            <Button title="Sacramento" onPress={() => handleCitySelect('Sacramento')} />
            <Button title="Denver" onPress={() => handleCitySelect('Denver')} />
            <Button title="Hartford" onPress={() => handleCitySelect('Hartford')} />
            <Button title="Dover" onPress={() => handleCitySelect('Dover')} />
            <Button title="Tallahassee" onPress={() => handleCitySelect('Tallahassee')} />
            <Button title="Atlanta" onPress={() => handleCitySelect('Atlanta')} />
            <Button title="Honolulu" onPress={() => handleCitySelect('Honolulu')} />
            <Button title="Boise" onPress={() => handleCitySelect('Boise')} />
            
            
           
            
            
            
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      {city === 'New York' && <NewYork />}
      {city === 'Montgomery' && <Montgomery />}
      {city === 'Juneau' && <Juneau />}
      {city === 'Phoenix' && <Phoenix />}
      {city === 'Little Rock' && <LittleRock />}
      {city === 'Sacramento' && <Sacramento />}
      {city === 'Denver' && <Denver />}
      {city === 'Hartford' && <Hartford />}
      {city === 'Dover' && <Dover />}
      {city === 'Tallahassee' && <Tallahassee />}
      {city === 'Atlanta' && <Atlanta />}
      {city === 'Honolulu' && <Honolulu />}
      {city === 'Boise' && <Boise />}
      
    </View>
  );
};

export default PopularCities;


