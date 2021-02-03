import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function Contact({ name, phone }) {
  return (
    <View style={style.container}>
      <Image
        style={style.contactImage}
        source={require("../assets/contact.jpg")}
      />
      <View style={style.textContainer}>
        <Text style={style.nameText} numberOfLines={1}>
          {name}
        </Text>
        <Text style={style.phoneText}>{phone}</Text>
      </View>
      <View style={style.iconsStyles}>
        <MaterialIcons name="local-phone" size={30} color="#009cf5" />
      </View>
      <View style={style.iconsStyles}>
        <MaterialCommunityIcons
          name="message-processing"
          size={30}
          color="#009cf5"
        />
      </View>
      <View style={style.iconsStyles}>
        <SimpleLineIcons name="options-vertical" size={30} color="#a8a8a8" />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  contactImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 15,
  },
  textContainer: {
    textAlign: "left",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    width: 130,
  },
  phoneText: {
    fontSize: 17,
  },
  iconsStyles: {
    marginHorizontal: 6,
    marginVertical: 20,
  },
});
