import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Colors from "../../../common/colors";
import { Container } from "../../../common/container";
import { AppleCard, AppleItems } from "../utils/searchResult";
import { SearchBox } from "../utils/searchBox";

export default function SearchResult({ navigation }) {
  return (
    <>
      <Container>
        <View style={{ paddingHorizontal: 25 }}>
          <SearchBox
            placeholder="Apple"
            onPress={() => navigation.navigate("noresult")}
          />
          <Text style={styles.result}>Found 6 results</Text>
          <View style={styles.resultCont}>
            {AppleItems.map((item, index) => {
              return (
                <AppleCard
                  key={index}
                  label={item.label}
                  amount={item.amount}
                  image={item.image}
                  onPress={() =>
                    navigation.navigate("details", { details: item })
                  }
                />
              );
            })}
          </View>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
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
