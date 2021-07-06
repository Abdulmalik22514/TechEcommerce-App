import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Colors from "../../common/colors";
import { Button } from "../../components/buttons";
import { CustomText, Input } from "../../components/input";
import { Email, Lock } from "../../assets/svg";
import { Container } from "../../common/container";
import { LoginStyles as styles } from "./loginStyles";

export default function Login({ navigation }) {
  return (
    <>
      <Container barColor={Colors.Purple} backgroundColor={Colors.Purple}>
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
      </Container>
    </>
  );
}
