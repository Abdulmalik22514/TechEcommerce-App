import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import * as Colors from "./colors";

export const Container = ({
  children,
  barColor = Colors.Ash,
  backgroundColor,
}) => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{ backgroundColor: barColor }} />
      <SafeAreaView style={{ backgroundColor, flex: 1 }}>
        {children}
      </SafeAreaView>
    </>
  );
};
