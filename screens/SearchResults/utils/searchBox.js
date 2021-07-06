import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SearchIcon } from "../../../assets/svg";
import * as Colors from "../../../common/colors";
import { BackArrow } from "../../../assets/svg";

export const SearchBox = ({ placeholder, onPress, onChange, value }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <BackArrow />
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <SearchIcon />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.Black}
          onChangeText={onChange}
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontWeight: "500",
    fontSize: 19,
    marginLeft: 10,
    paddingHorizontal: 5,
    color: Colors.Black,
    height: 40,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    borderRadius: 50,
    borderColor: Colors.Purple,
    borderWidth: 2,
    height: 60,
    marginLeft: 20,
    padding: 20,
  },
});
