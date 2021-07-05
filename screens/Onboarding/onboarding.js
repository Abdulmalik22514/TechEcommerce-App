import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Colors from "../../common/colors";
import * as Images from "../../assets/images";
import { Button } from "../../components/buttons";

export default function Onboarding({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"light"} />
      <Text style={styles.findGadget}>Find your Gadget</Text>
      <Image
        source={Images.Splash}
        resizeMode={"contain"}
        style={styles.splashImg}
      />
      <Button
        title="Get started"
        style={styles.button}
        titleColor={Colors.Purple}
        onPress={() => navigation.navigate("login")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Purple,
    paddingTop: 40,
  },
  findGadget: {
    fontSize: 60,
    fontWeight: "800",
    color: Colors.White,
    marginTop: 30,
    alignSelf: "center",
    width: 290,
    letterSpacing: 0.8,
    // fontFamily: "Montserrat",
  },
  splashImg: {
    width: "100%",
    height: 450,
  },
  button: {
    backgroundColor: Colors.White,
    marginTop: 50,
    width: 300,
  },
});
