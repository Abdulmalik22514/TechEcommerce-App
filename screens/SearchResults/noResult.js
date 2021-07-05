import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Colors from "../../common/colors";
import { SearchBox } from "./utils/searchBox";
import * as Images from "../../assets/images";

export default function NoResult({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBox placeholder="Apppi" onPress={() => navigation.pop()} />
        <Image
          source={Images.NotFound}
          style={styles.NotFound}
          resizeMode={"cover"}
        />
        <Text style={styles.result}>Item not found</Text>
        <Text style={styles.tryMore}>
          Try a more generic search term or try looking for alternative
          products.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  tryMore: {
    color: Colors.Black,
    fontWeight: "300",
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
    fontWeight: "500",
    alignSelf: "center",
  },
  NotFound: {
    width: "100%",
    height: 300,
  },
});
