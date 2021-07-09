import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Colors from "../../../common/colors";
import * as Images from "../../../assets/images";

export const Categories = [
  {
    title: "Wearables",
  },
  {
    title: "Laptops",
  },
  {
    title: "Phones",
  },
  {
    title: "Drones",
  },
];

export const Wearables = [
  {
    image: Images.Apple,
    label: "Apple Watch",
    type: "Series 6 . Red",
    amount: 359,
  },
  {
    image: Images.Samsung,
    label: "SAMSUNG Galaxy Watch",
    type: "Active . Green",
    amount: 159,
  },
];

export const CategoriesCard = ({ title, isActive, onPress }) => {
  return (
    <TouchableOpacity style={styles.navCont} onPress={onPress}>
      <Text style={[styles.title, isActive && styles.activeText]}>{title}</Text>
      {isActive && <View style={styles.activeView} />}
    </TouchableOpacity>
  );
};

export const WearablesCard = ({ image, label, type, amount }) => {
  return (
    <TouchableOpacity style={{ marginRight: 30 }}>
      <Image source={image} style={styles.image} resizeMode={"contain"} />
      <View style={styles.wearablesCont}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.amount}>{`$ ${amount}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.Ash,
    fontSize: 17,
    fontFamily: "raleway600",
  },
  label: {
    fontSize: 19,
    color: Colors.Black,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "raleway600",
  },
  type: {
    fontSize: 15,
    color: Colors.Grey,
    marginBottom: 20,
    fontFamily: "raleway600",
  },
  amount: {
    fontSize: 17,
    color: Colors.Purple,
    fontFamily: "raleway600",
  },
  wearablesCont: {
    width: 230,
    height: 270,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    paddingTop: 120,
    marginTop: 50,
  },
  image: {
    width: 180,
    height: 160,
    position: "absolute",
    zIndex: 100,
    alignSelf: "center",
  },
  activeText: {
    color: Colors.Purple,
  },
  activeView: {
    width: 90,
    height: 3,
    backgroundColor: Colors.Purple,
    borderRadius: 2,
    marginTop: 10,
  },
  navCont: {
    width: 90,
    alignItems: "center",
  },
});
