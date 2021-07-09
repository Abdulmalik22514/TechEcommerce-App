import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Images from "../../../assets/images";
import { Minus, Plus } from "../../../assets/svg";
import * as Colors from "../../../common/colors";

export const BasketItems = [
  { picture: Images.IpadAir, label: "2020 Apple iPad Air 10.9", amount: 579 },
  { picture: Images.AirPod, label: "APPLE AirPods Pro - White", amount: 375 },
];

export const BasketCard = ({
  picture,
  label,
  amount,
  value,
  onAdd,
  onSubtract,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image source={picture} resizeMode="contain" style={styles.picture} />
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.apple2020}>{label}</Text>
        <Text style={styles.amt}>{`$${amount}.00`}</Text>
        <View style={styles.qtyBox}>
          <Text style={styles.qtyText}>Quantity</Text>
          <View style={styles.minusBox}>
            <TouchableOpacity style={styles.minus} onPress={onSubtract}>
              <Minus />
            </TouchableOpacity>
            <Text style={{ fontWeight: "600" }}>{value}</Text>
            <TouchableOpacity style={styles.minus} onPress={onAdd}>
              <Plus />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    width: "100%",
    padding: 15,
    height: 140,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  qtyText: {
    fontFamily: "raleway400",
    fontSize: 17,
  },
  amt: {
    color: Colors.Purple,
    fontSize: 17,
    fontFamily: "raleway600",
  },
  apple2020: {
    color: Colors.Black,
    fontFamily: "raleway600",
    fontSize: 18,
    marginBottom: 15,
    width: 210,
  },
  picture: {
    width: 85,
    height: 110,
    marginRight: 10,
  },
  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  minusBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 74,
    marginLeft: 15,
  },
  minus: {
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    borderRadius: 5,
    backgroundColor: Colors.PlusBox,
  },
});
