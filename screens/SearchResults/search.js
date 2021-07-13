import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Colors from "../../common/colors";
import { Container } from "../../common/container";
import { AppleCard, AppleItems } from "./utils/searchResult";
import { SearchBox } from "./utils/searchBox";
import { NoResult } from "./utils/noResult";

export default function SearchResult({ navigation }) {
  // set all data in the array to state
  const [allData, setAllData] = useState([...AppleItems]);

  // create filter function to be passed into the onchangetext
  const filterSearch = (value) => {
    // assign item to be filtered to all the available item
    const DatatoFilter = allData;
    // return the overall items if value is not input yet
    if (!value) {
      return setAllData([...AppleItems]);
    }
    // filter the item here, and check for all cases of input(its included in the data to filter, and also not case sensitive)
    const filterData = DatatoFilter.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
    // display filtered data
    setAllData([...filterData]);
  };

  const dataLength = allData.length;

  return (
    <>
      <Container>
        <View style={{ paddingHorizontal: 25 }}>
          <SearchBox
            placeholder="Search"
            onPress={() => navigation.pop()}
            onChange={(text) => filterSearch(text)}
          />
          <Text style={styles.result}>{`Found ${dataLength} result${
            dataLength > 1 ? "s" : ""
          }`}</Text>
          <View style={styles.resultCont}>
            {dataLength < 1 ? (
              <NoResult />
            ) : (
              allData.map((item, index) => {
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
              })
            )}
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
    fontFamily: "raleway600",
    alignSelf: "center",
  },
  resultCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
