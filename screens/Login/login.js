import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Colors from "../../common/colors";
import { Button } from "../../components/buttons";
import { CustomText, Input } from "../../components/input";
import { Email, Lock } from "../../assets/svg";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <Text style={styles.findGadget}>Welcome back</Text>
      <View style={styles.bottomBox}>
        <Text style={styles.label}>Login</Text>
        <Input
          icon={<Email />}
          title="Email"
          placeholder="rosina@company.com"
        />
        <Input
          icon={<Lock />}
          title="Password"
          placeholder=""
          secure
          isVisible
        />
        <CustomText title="Forgot passcode?" />
        <Button
          title="Login"
          onPress={() => navigation.navigate("home")}
          titleColor={Colors.White}
        />
        <CustomText title="Create account" isCenter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Purple,
    paddingTop: 40,
  },
  label: {
    fontWeight: "600",
    fontSize: 18,
  },
  findGadget: {
    fontSize: 63,
    fontWeight: "800",
    color: Colors.White,
    marginTop: 30,
    alignSelf: "center",
    width: 290,
    letterSpacing: 0.8,
    marginBottom: 50,
  },
  bottomBox: {
    flex: 1,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 50,
  },
});
