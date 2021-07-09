import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import Navigator from "./navigation";
import { View, Text, StyleSheet } from "react-native";

import * as Font from "expo-font";
import LoadAssets from "./hooks/loadResource";

export default function App() {
  const { isLoadingComplete } = LoadAssets();

  if (isLoadingComplete) {
    return <Navigator />;
  } else return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//   const [loaded] = useFonts({
//     Montserrat: require("./assets/fonts/Montserrat.ttf"),
//   });
//   console.log(loaded);

//   if (!loaded) {
//     return null;
//   }

//   return <Navigator />;
// }
