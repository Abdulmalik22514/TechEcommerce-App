import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Colors from "../../../common/colors";
import * as Images from "../../../assets/images";

export const NoResult = () => {
  return (
    <View style={styles.noResultCont}>
      <Image
        source={Images.NotFound}
        style={styles.NotFound}
        resizeMode={"cover"}
      />
      <Text style={styles.result}>Item not found</Text>
      <Text style={styles.tryMore}>
        Try a more generic search term or try looking for alternative products.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noResultCont: {
    width: "100%",
  },
  tryMore: {
    color: Colors.Black,
    fontFamily: "raleway400",
    textAlign: "center",
    fontSize: 18,
    width: 314,
    alignSelf: "center",
    marginTop: 30,
    height: 48,
    lineHeight: 23,
    opacity: 0.5,
  },
  result: {
    color: Colors.Black,
    fontSize: 30,
    fontFamily: "raleway600",
    alignSelf: "center",
  },
  NotFound: {
    width: "100%",
    height: 300,
  },
});
