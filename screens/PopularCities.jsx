import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Montgomery from "../cities/Montgomery";
import Juneau from "../cities/Juneau";
import Phoenix from "../cities/Phoenix";
import LittleRock from "../cities/LittleRock";
import Sacramento from "../cities/Sacramento";
import Denver from "../cities/Denver";
import Hartford from "../cities/Hartford";
import Dover from "../cities/Dover";
import Tallahassee from "../cities/Tallahassee";
import Atlanta from "../cities/Atlanta";
import Honolulu from "../cities/Honolulu";
import Boise from "../cities/Boise";
import Springfield from "../cities/Springfield";
import Indianapolis from "../cities/Indianapolis";
import DesMoines from "../cities/DesMoines";
import Topeka from "../cities/Topeka";
import Frankfort from "../cities/Frankfort";
import BatonRouge from "../cities/BatonRouge";
import Augusta from "../cities/Augusta";
import Annapolis from "../cities/Annapolis";
import Boston from "../cities/Boston";
import Lansing from "../cities/Lansing";
import StPaul from "../cities/StPaul";
import Jackson from "../cities/Jackson";
import JeffersonCity from "../cities/JeffersonCity";
import Helena from "../cities/Helena";
import Lincoln from "../cities/Lincoln";
import CarsonCity from "../cities/CarsonCity";
import Concord from "../cities/Concord";
import Trenton from "../cities/Trenton";
import SantaFe from "../cities/SantaFe";
import Albany from "../cities/Albany";
import Raleigh from "../cities/Raleigh";
import Bismarck from "../cities/Bismarck";
import Columbus from "../cities/Columbus";
import OklahomaCity from "../cities/OklahomaCity";
import Salem from "../cities/Salem";
import Harrisburg from "../cities/Harrisburg";
import Providence from "../cities/Providence";
import Columbia from "../cities/Columbia";
import Pierre from "../cities/Pierre";
import Nashville from "../cities/Nashville";
import Austin from "../cities/Austin";
import SaltLake from "../cities/SaltLake";
import Montpelier from "../cities/Montpelier";
import Richmond from "../cities/Richmond";
import Olympia from "../cities/Olympia";
import Charleston from "../cities/Charleston";
import Madison from "../cities/Madison";
import Cheyenne from "../cities/Cheyenne";

const PopularCities = () => {
  const [city, setCity] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ padding: 16 }}
      >
        <Text style={{ fontSize: 20, fontFamily: "Futura", color: "#595959" }}>
          {city ? city : "State Capitals"}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.StyleOne}>
          <View style={styles.StyleTwo}>
            <ScrollView style={styles.StyleThree}>
              <Button
                style={styles.Button}
                title="Albany"
                onPress={() => handleCitySelect("Albany")}
              />
              <Button
                style={styles.Button}
                title="Annapolis"
                onPress={() => handleCitySelect("Annapolis")}
              />
              <Button
                style={styles.Button}
                title="Atlanta"
                onPress={() => handleCitySelect("Atlanta")}
              />
              <Button
                style={styles.Button}
                title="Augusta"
                onPress={() => handleCitySelect("Augusta")}
              />
              <Button
                style={styles.Button}
                title="Austin"
                onPress={() => handleCitySelect("Austin")}
              />
              <Button
                style={styles.Button}
                title="Baton Rouge"
                onPress={() => handleCitySelect("Baton Rouge")}
              />
              <Button
                style={styles.Button}
                title="Bismarck"
                onPress={() => handleCitySelect("Bismarck")}
              />
              <Button
                style={styles.Button}
                title="Boise"
                onPress={() => handleCitySelect("Boise")}
              />
              <Button
                style={styles.Button}
                title="Boston"
                onPress={() => handleCitySelect("Boston")}
              />
              <Button
                style={styles.Button}
                title="Carson City"
                onPress={() => handleCitySelect("Carson City")}
              />
              <Button
                style={styles.Button}
                title="Charleston"
                onPress={() => handleCitySelect("Charleston")}
              />
              <Button
                style={styles.Button}
                title="Cheyenne"
                onPress={() => handleCitySelect("Cheyenne")}
              />
              <Button
                style={styles.Button}
                title="Columbia"
                onPress={() => handleCitySelect("Columbia")}
              />
              <Button
                style={styles.Button}
                title="Columbus"
                onPress={() => handleCitySelect("Columbus")}
              />
              <Button
                style={styles.Button}
                title="Concord"
                onPress={() => handleCitySelect("Concord")}
              />
              <Button
                style={styles.Button}
                title="Denver"
                onPress={() => handleCitySelect("Denver")}
              />
              <Button
                style={styles.Button}
                title="Des Moines"
                onPress={() => handleCitySelect("Des Moines")}
              />
              <Button
                style={styles.Button}
                title="Dover"
                onPress={() => handleCitySelect("Dover")}
              />
              <Button
                style={styles.Button}
                title="Frankfort"
                onPress={() => handleCitySelect("Frankfort")}
              />
              <Button
                style={styles.Button}
                title="Harrisburg"
                onPress={() => handleCitySelect("Harrisburg")}
              />
              <Button
                style={styles.Button}
                title="Hartford"
                onPress={() => handleCitySelect("Hartford")}
              />
              <Button
                style={styles.Button}
                title="Helena"
                onPress={() => handleCitySelect("Helena")}
              />
              <Button
                style={styles.Button}
                title="Honolulu"
                onPress={() => handleCitySelect("Honolulu")}
              />
              <Button
                style={styles.Button}
                title="Indianapolis"
                onPress={() => handleCitySelect("Indianapolis")}
              />
              <Button
                style={styles.Button}
                title="Jackson"
                onPress={() => handleCitySelect("Jackson")}
              />
              <Button
                style={styles.Button}
                title="Jefferson City"
                onPress={() => handleCitySelect("Jefferson City")}
              />
              <Button
                style={styles.Button}
                title="Juneau"
                onPress={() => handleCitySelect("Juneau")}
              />
              <Button
                style={styles.Button}
                title="Lansing"
                onPress={() => handleCitySelect("Lansing")}
              />
              <Button
                style={styles.Button}
                title="Lincoln"
                onPress={() => handleCitySelect("Lincoln")}
              />
              <Button
                style={styles.Button}
                title="Little Rock"
                onPress={() => handleCitySelect("Little Rock")}
              />
              <Button
                style={styles.Button}
                title="Madison"
                onPress={() => handleCitySelect("Madison")}
              />
              <Button
                style={styles.Button}
                title="Montgomery"
                onPress={() => handleCitySelect("Montgomery")}
              />
              <Button
                style={styles.Button}
                title="Montpelier"
                onPress={() => handleCitySelect("Montpelier")}
              />
              <Button
                style={styles.Button}
                title="Nashville"
                onPress={() => handleCitySelect("Nashville")}
              />
              <Button
                style={styles.Button}
                title="Oklahoma City"
                onPress={() => handleCitySelect("Oklahoma City")}
              />
              <Button
                style={styles.Button}
                title="Olympia"
                onPress={() => handleCitySelect("Olympia")}
              />
              <Button
                style={styles.Button}
                title="Phoenix"
                onPress={() => handleCitySelect("Phoenix")}
              />
              <Button
                style={styles.Button}
                title="Pierre"
                onPress={() => handleCitySelect("Pierre")}
              />
              <Button
                style={styles.Button}
                title="Providence"
                onPress={() => handleCitySelect("Providence")}
              />
              <Button
                style={styles.Button}
                title="Raleigh"
                onPress={() => handleCitySelect("Raleigh")}
              />
              <Button
                style={styles.Button}
                title="Richmond"
                onPress={() => handleCitySelect("Richmond")}
              />
              <Button
                style={styles.Button}
                title="Sacramento"
                onPress={() => handleCitySelect("Sacramento")}
              />
              <Button
                style={styles.Button}
                title="Salem"
                onPress={() => handleCitySelect("Salem")}
              />
              <Button
                style={styles.Button}
                title="Salt Lake City"
                onPress={() => handleCitySelect("Salt Lake City")}
              />
              <Button
                style={styles.Button}
                title="Santa Fe"
                onPress={() => handleCitySelect("Santa Fe")}
              />
              <Button
                style={styles.Button}
                title="Springfield"
                onPress={() => handleCitySelect("Springfield")}
              />
              <Button
                style={styles.Button}
                title="St. Paul"
                onPress={() => handleCitySelect("St. Paul")}
              />
              <Button
                style={styles.Button}
                title="Tallahassee"
                onPress={() => handleCitySelect("Tallahassee")}
              />
              <Button
                style={styles.Button}
                title="Topeka"
                onPress={() => handleCitySelect("Topeka")}
              />
              <Button
                style={styles.Button}
                title="Trenton"
                onPress={() => handleCitySelect("Trenton")}
              />
              <Button
                style={styles.Button}
                title="Cancel"
                onPress={() => setModalVisible(false)}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>

      {city === "Montgomery" && <Montgomery />}
      {city === "Juneau" && <Juneau />}
      {city === "Phoenix" && <Phoenix />}
      {city === "Little Rock" && <LittleRock />}
      {city === "Sacramento" && <Sacramento />}
      {city === "Denver" && <Denver />}
      {city === "Hartford" && <Hartford />}
      {city === "Dover" && <Dover />}
      {city === "Tallahassee" && <Tallahassee />}
      {city === "Atlanta" && <Atlanta />}
      {city === "Honolulu" && <Honolulu />}
      {city === "Boise" && <Boise />}
      {city === "Springfield" && <Springfield />}
      {city === "Indianapolis" && <Indianapolis />}
      {city === "Des Moines" && <DesMoines />}
      {city === "Topeka" && <Topeka />}
      {city === "Frankfort" && <Frankfort />}
      {city === "Baton Rouge" && <BatonRouge />}
      {city === "Augusta" && <Augusta />}
      {city === "Annapolis" && <Annapolis />}
      {city === "Boston" && <Boston />}
      {city === "Lansing" && <Lansing />}
      {city === "St. Paul" && <StPaul />}
      {city === "Jackson" && <Jackson />}
      {city === "Jefferson City" && <JeffersonCity />}
      {city === "Helena" && <Helena />}
      {city === "Lincoln" && <Lincoln />}
      {city === "Carson City" && <CarsonCity />}
      {city === "Concord" && <Concord />}
      {city === "Trenton" && <Trenton />}
      {city === "Santa Fe" && <SantaFe />}
      {city === "Albany" && <Albany />}
      {city === "Raleigh" && <Raleigh />}
      {city === "Bismarck" && <Bismarck />}
      {city === "Columbus" && <Columbus />}
      {city === "Oklahoma City" && <OklahomaCity />}
      {city === "Salem" && <Salem />}
      {city === "Harrisburg" && <Harrisburg />}
      {city === "Providence" && <Providence />}
      {city === "Columbia" && <Columbia />}
      {city === "Pierre" && <Pierre />}
      {city === "Nashville" && <Nashville />}
      {city === "Austin" && <Austin />}
      {city === "Salt Lake City" && <SaltLake />}
      {city === "Montpelier" && <Montpelier />}
      {city === "Richmond" && <Richmond />}
      {city === "Olympia" && <Olympia />}
      {city === "Charleston" && <Charleston />}
      {city === "Madison" && <Madison />}
      {city === "Cheyenne" && <Cheyenne />}

      
    </View>
  );
};

const styles = StyleSheet.create({
  StyleOne: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  StyleTwo: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    fontFamily: "Verdana",
  },
  StyleThree: {
    maxHeight: 300,
    maxWidth: 400,
    borderRadius: 20,
  },
  Button: {
    color: "black",
  },
});

export default PopularCities;
