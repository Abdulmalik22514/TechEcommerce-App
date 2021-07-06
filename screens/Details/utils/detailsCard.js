import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Colors from "../../../common/colors";

export const ColorType = [
  { title: "Sky Blue", color: Colors.SkyBlue },
  { title: "Rose Gold", color: Colors.RoseGold },
  { title: "Green", color: Colors.Green },
];

export const ColorTypeCard = ({ title, backgroundColor }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.colorType, { backgroundColor }]}></View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Border,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginRight: 5,
  },
  title: {
    color: Colors.Black,
    fontSize: 14,
    fontWeight: "700",
  },
  colorType: {
    backgroundColor: Colors.SkyBlue,
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 7,
  },
});
