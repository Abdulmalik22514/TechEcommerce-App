import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import * as Colors from "../../common/colors";
import * as Images from "../../assets/images";
import { Button } from "../../components/buttons";
import { Container } from "../../common/container";

export default function Onboarding({ navigation }) {
  return (
    <>
      <Container barColor={Colors.Purple} backgroundColor={Colors.Purple}>
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
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
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
