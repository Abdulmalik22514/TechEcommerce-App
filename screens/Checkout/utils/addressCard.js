import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Call, Locator, Profile } from "../../../assets/svg";

export const AddressInfo = [
  { icon: <Profile />, label: "Rosina Doe" },
  { icon: <Locator />, label: "43 Oxford Road M13 4GR Manchester, UK" },
  { icon: <Call />, label: "+234 9011039271" },
];

export const AddressCard = ({ label, icon, onChange, value }) => {
  return (
    <View style={styles.contactInfo}>
      {icon}
      <TextInput
        style={styles.title}
        placeholder={label}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontFamily: "raleway400",
    fontSize: 15,
    marginLeft: 15,
    width: 220,
    lineHeight: 20,
    height: 40,
  },
});
