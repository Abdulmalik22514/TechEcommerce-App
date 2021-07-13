import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Locator, Profile } from "../../../assets/svg";
import * as Colors from "../../../common/colors";

export const AddressInfo = [
  { icon: <Profile />, title: "Rosina Doe" },
  { icon: <Locator />, title: "43 Oxford Road M13 4GR Manchester, UK" },
  { icon: <Profile />, title: "+234 9011039271" },
];

export const AddressCard = ({ title, icon }) => {
  return (
    <View style={styles.contactInfo}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontFamily: "raleway400",
    fontSize: 15,
    marginLeft: 15,
    width: 200,
    lineHeight: 20,
  },
});
