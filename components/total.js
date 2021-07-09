import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Colors from "../common/colors";

export const TotalBox = ({ total, amount }) => {
  return (
    <View style={styles.totalBox}>
      <Text style={styles.total}>{total}</Text>
      <Text style={styles.amount}>{`$ ${amount}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  amount: {
    fontSize: 25,
    fontFamily: "raleway700",
    color: Colors.Purple,
  },
  total: {
    fontFamily: "raleway400",
    fontSize: 19,
    color: Colors.Black,
  },
  totalBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
