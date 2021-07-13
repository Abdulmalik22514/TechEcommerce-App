import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as Colors from "../../../common/colors";
import * as Images from "../../../assets/images";

export const CardTypes = [
  { icon: Images.Visa, title: "**** **** **** 1234" },
  { icon: Images.Master, title: "**** **** **** 9274" },
  { icon: Images.Bank, title: "**** **** **** 5614" },
];

export const PaymentCard = ({ icon, isActive, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.contactInfo}>
      <TouchableOpacity style={styles.outerCircle} onPress={onPress}>
        {isActive ? <View style={styles.innerCircle} /> : null}
      </TouchableOpacity>

      <Image source={icon} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  innerCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.Purple,
  },
  img: {
    width: 65,
    height: 42,
  },
  outerCircle: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.EmptyView,
    width: 16,
    height: 16,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "raleway400",
    fontSize: 18,
    marginLeft: 15,
    // width: 200,
    // lineHeight: 20,
  },
});
