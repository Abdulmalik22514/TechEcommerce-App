import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BackArrow, Heart } from "../assets/svg";
import * as Colors from "../common/colors";

export const Header = ({ title, icon, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <BackArrow />
      </TouchableOpacity>
      {title ? <Text style={styles.title}>{title}</Text> : <View />}
      <TouchableOpacity>{icon ? icon : <View />}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 10,
  },
  title: {
    fontSize: 19,
    fontFamily: "raleway700",
    color: Colors.Black,
    marginLeft: 110,
  },
});
