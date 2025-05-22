import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Location } from "@customTypes/location";

interface LocationListProps {
  locations: Location[];
  handleLocation: (location: Location) => void;
}

const LocationList: React.FC<LocationListProps> = ({
  locations,
  handleLocation,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.locationItem}
            onPress={() => handleLocation(item)}
          >
            <FontAwesome name="map-marker" size={20} color="#ff6347" />
            <View style={styles.textContainer}>
              <Text style={styles.cityText}>{item?.name}</Text>
              <Text style={styles.countryText}>{item?.country}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LocationList;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    top: 140,
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    marginLeft: 10,
    flexDirection: "row",
  },
  cityText: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 10,
  },
  countryText: {
    fontSize: 14,
  },
});
