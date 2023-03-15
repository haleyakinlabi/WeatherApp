import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, ScrollView } from 'react-native';
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
import Springfield from '../cities/Springfield';
import Indianapolis from '../cities/Indianapolis';
import DesMoines from '../cities/DesMoines';
import Topeka from '../cities/Topeka';
import Frankfort from '../cities/Frankfort';
import BatonRouge from '../cities/BatonRouge';
import Augusta from '../cities/Augusta';
import Annapolis from '../cities/Annapolis';
import Boston from '../cities/Boston';
import Lansing from '../cities/Lansing';
import StPaul from '../cities/StPaul';
import Jackson from '../cities/Jackson';
import JeffersonCity from '../cities/JeffersonCity';
import Helena from '../cities/Helena';
import Lincoln from '../cities/Lincoln';
import CarsonCity from '../cities/CarsonCity';
import Concord from '../cities/Concord';
import Trenton from '../cities/Trenton';
import SantaFe from '../cities/SantaFe';
import Albany from '../cities/Albany';
import Raleigh from '../cities/Raleigh';
import Bismarck from '../cities/Bismarck';
import Columbus from '../cities/Columbus';
import OklahomaCity from '../cities/OklahomaCity';
import Salem from '../cities/Salem';
import Harrisburg from '../cities/Harrisburg';
import Providence from '../cities/Providence';
import Columbia from '../cities/Columbia';
import Pierre from '../cities/Pierre';
import Nashville from '../cities/Nashville';
import Austin from '../cities/Austin';
import SaltLake from '../cities/SaltLake';
import Montpelier from '../cities/Montpelier';
import Richmond from '../cities/Richmond';
import Olympia from '../cities/Olympia';
import Charleston from '../cities/Charleston';
import Madison from '../cities/Madison';
import Cheyenne from '../cities/Cheyenne';


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
          {city ? city : 'Select a State Capital'}
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
          <ScrollView style={{ maxHeight: 300, maxWidth: 300 }}>
            <Button title="Albany" onPress={() => handleCitySelect('Albany')} />
            <Button title="Annapolis" onPress={() => handleCitySelect('Annapolis')} />
            <Button title="Atlanta" onPress={() => handleCitySelect('Atlanta')} />
            <Button title="Augusta" onPress={() => handleCitySelect('Augusta')} />
            <Button title="Austin" onPress={() => handleCitySelect('Austin')} />
            <Button title="Baton Rouge" onPress={() => handleCitySelect('Baton Rouge')} />
            <Button title="Bismarck" onPress={() => handleCitySelect('Bismarck')} />
            <Button title="Boise" onPress={() => handleCitySelect('Boise')} />
            <Button title="Boston" onPress={() => handleCitySelect('Boston')} />
            <Button title="Carson City" onPress={() => handleCitySelect('Carson City')} />
            <Button title="Charleston" onPress={() => handleCitySelect('Charleston')} />
            <Button title="Cheyenne" onPress={() => handleCitySelect('Cheyenne')} />
            <Button title="Columbia" onPress={() => handleCitySelect('Columbia')} />
            <Button title="Columbus" onPress={() => handleCitySelect('Columbus')} />
            <Button title="Concord" onPress={() => handleCitySelect('Concord')} />
            <Button title="Denver" onPress={() => handleCitySelect('Denver')} />
            <Button title="Des Moines" onPress={() => handleCitySelect('Des Moines')} />
            <Button title="Dover" onPress={() => handleCitySelect('Dover')} />
            <Button title="Frankfort" onPress={() => handleCitySelect('Frankfort')} />
            <Button title="Harrisburg" onPress={() => handleCitySelect('Harrisburg')} />
            <Button title="Hartford" onPress={() => handleCitySelect('Hartford')} />
            <Button title="Helena" onPress={() => handleCitySelect('Helena')} />
            <Button title="Honolulu" onPress={() => handleCitySelect('Honolulu')} />
            <Button title="Indianapolis" onPress={() => handleCitySelect('Indianapolis')} />
            <Button title="Jackson" onPress={() => handleCitySelect('Jackson')} />
            <Button title="Jefferson City" onPress={() => handleCitySelect('Jefferson City')} />
            <Button title="Juneau" onPress={() => handleCitySelect('Juneau')} />
            <Button title="Lansing" onPress={() => handleCitySelect('Lansing')} />
            <Button title="Lincoln" onPress={() => handleCitySelect('Lincoln')} />
            <Button title="Little Rock" onPress={() => handleCitySelect('Little Rock')} />
            <Button title="Madison" onPress={() => handleCitySelect('Madison')} />
            <Button title="Montgomery" onPress={() => handleCitySelect('Montgomery')} />
            <Button title="Montpelier" onPress={() => handleCitySelect('Montpelier')} />
            <Button title="Nashville" onPress={() => handleCitySelect('Nashville')} />
            <Button title="Oklahoma City" onPress={() => handleCitySelect('Oklahoma City')} />
            <Button title="Olympia" onPress={() => handleCitySelect('Olympia')} />
            <Button title="Phoenix" onPress={() => handleCitySelect('Phoenix')} />
            <Button title="Pierre" onPress={() => handleCitySelect('Pierre')} />
            <Button title="Providence" onPress={() => handleCitySelect('Providence')} />
            <Button title="Raleigh" onPress={() => handleCitySelect('Raleigh')} />
            <Button title="Richmond" onPress={() => handleCitySelect('Richmond')} />
            <Button title="Sacramento" onPress={() => handleCitySelect('Sacramento')} />
            <Button title="Salem" onPress={() => handleCitySelect('Salem')} />
            <Button title="Salt Lake City" onPress={() => handleCitySelect('Salt Lake City')} />
            <Button title="Santa Fe" onPress={() => handleCitySelect('Santa Fe')} />
            <Button title="Springfield" onPress={() => handleCitySelect('Springfield')} />
            <Button title="St. Paul" onPress={() => handleCitySelect('St. Paul')} />
            <Button title="Tallahassee" onPress={() => handleCitySelect('Tallahassee')} />
            <Button title="Topeka" onPress={() => handleCitySelect('Topeka')} />
            <Button title="Trenton" onPress={() => handleCitySelect('Trenton')} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </ScrollView>
            
            
           
            
            
            
            
          </View>
        </View>
      </Modal>

    
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
      {city === 'Springfield' && <Springfield />}
      {city === 'Indianapolis' && <Indianapolis />}
      {city === 'Des Moines' && <DesMoines />}
      {city === 'Topeka' && <Topeka />}
      {city === 'Frankfort' && <Frankfort />}
      {city === 'Baton Rouge' && <BatonRouge />}
      {city === 'Augusta' && <Augusta />}
      {city === 'Annapolis' && <Annapolis />}
      {city === 'Boston' && <Boston />}
      {city === 'Lansing' && <Lansing />}
      {city === 'St. Paul' && <StPaul />}
      {city === 'Jackson' && <Jackson />}
      {city === 'Jefferson City' && <JeffersonCity />}
      {city === 'Helena' && <Helena />}
      {city === 'Lincoln' && <Lincoln />}
      {city === 'Carson City' && <CarsonCity />}
      {city === 'Concord' && <Concord />}
      {city === 'Trenton' && <Trenton />}
      {city === 'Santa Fe' && <SantaFe />}
      {city === 'Albany' && <Albany />}
      {city === 'Raleigh' && <Raleigh />}
      {city === 'Bismarck' && <Bismarck />}
      {city === 'Columbus' && <Columbus />}
      {city === 'Oklahoma City' && <OklahomaCity />}
      {city === 'Salem' && <Salem />}
      {city === 'Harrisburg' && <Harrisburg />}
      {city === 'Providence' && <Providence />}
      {city === 'Columbia' && <Columbia />}
      {city === 'Pierre' && <Pierre />}
      {city === 'Nashville' && <Nashville />}
      {city === 'Austin' && <Austin />}
      {city === 'Salt Lake City' && <SaltLake />}
      {city === 'Montpelier' && <Montpelier />}
      {city === 'Richmond' && <Richmond />}
      {city === 'Olympia' && <Olympia />}
      {city === 'Charleston' && <Charleston />}
      {city === 'Madison' && <Madison />}
      {city === 'Cheyenne' && <Cheyenne />}
      
    </View>
  );
};

export default PopularCities;


