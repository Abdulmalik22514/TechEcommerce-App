import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Colors from "../../common/colors";
import { AppleCard, AppleItems } from "./utils/result";
import { SearchBox } from "./utils/searchBox";

export default function SearchResult({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBox placeholder="Apple" />
        <Text style={styles.result}>Found 6 results</Text>
        <View style={styles.resultCont}>
          {AppleItems.map((item, index) => {
            return (
              <AppleCard
                key={index}
                label={item.label}
                amount={item.amount}
                image={item.image}
                onPress={() => navigation.navigate("details")}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  result: {
    color: Colors.Black,
    fontSize: 28,
    fontWeight: "600",
    alignSelf: "center",
  },
  resultCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
