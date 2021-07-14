import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Forward } from "../../../assets/svg";
import * as Colors from "../../../common/colors";

export const ProfileEdit = [
  { title: "Edit Profile" },
  { title: "Shopping address" },
  { title: "Order history" },
  { title: "Cards" },
  { title: "Notifications" },
];

export const ProfileCard = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Forward />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.White,
    width: 325,
    height: 60,
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});
