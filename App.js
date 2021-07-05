import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import Navigator from "./navigation";
import { View, Text, StyleSheet } from "react-native";

import * as Font from "expo-font";

export default function App() {
  const [state, setState] = useState(true);

  async function loadFonts() {
    await Font.loadAsync({
      Montserrat: require("./assets/fonts/Montserrat.ttf"),
    });
    setState(true);
  }

  // useEffect(() => {
  //   loadFonts();
  // }, []);

  if (state) {
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
