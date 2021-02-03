import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Contact from "../component/contact.js";

export default function ContactScreen() {
  const conctacts = [
    { name: "Sam Bob", number: "043-565-7665" },
    { name: "John Mike", number: "023-543-2233" },
    { name: "Eunice Anderson", number: "098-765-4333" },
    { name: "Joseph Soup", number: "012-433-5666" },
    { name: "Mom", number: "084-775-5667" },
    { name: "Daddy", number: "054-675-2234" },
    { name: "John Mike", number: "023-543-2233" },
    { name: "Eunice Anderson", number: "098-765-4333" },
    { name: "Joseph Soup", number: "012-433-5666" },
  ];
  return (
    <View style={style.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={conctacts}
        renderItem={({ item }) => {
          return <Contact name={item.name} phone={item.number} />;
        }}
        keyExtractor={(item) => {
          item.number;
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
});
