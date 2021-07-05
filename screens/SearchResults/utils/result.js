import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import * as Images from "../../../assets/images";
import * as Colors from "../../../common/colors";

export const AppleItems = [
  {
    image: Images.IpadAir,
    label: "Apple Ipad Air",
    amount: 579,
  },
  {
    image: Images.AppleWatch,
    label: "Apple Watch",
    amount: 139,
  },
  {
    image: Images.MacBook,
    label: "Apple MacBook",
    amount: 879,
  },
  {
    image: Images.Iphone,
    label: "Apple iPhone",
    amount: 879,
  },
];

export const AppleCard = ({ image, label, amount, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemCont} onPress={onPress}>
      <Image source={image} style={styles.image} resizeMode={"contain"} />
      <View style={styles.wearablesCont}>
        <Text style={styles.label}>{label}</Text>

        <Text style={styles.amount}>{`From $${amount}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 21,
    fontWeight: "500",
    color: Colors.Black,
    marginBottom: 5,
    width: 90,
    height: 55,
    textAlign: "center",
  },
  itemCont: {
    width: 160,
    height: 300,
  },
  type: {
    fontSize: 15,
    fontWeight: "500",
    color: Colors.Grey,
    marginBottom: 20,
  },
  amount: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.Purple,
  },
  wearablesCont: {
    width: 156,
    height: 215,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    paddingTop: 100,
    marginTop: 50,
  },
  image: {
    width: 115,
    height: 150,
    position: "absolute",
    zIndex: 100,
    alignSelf: "center",
  },
});
