import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Colors from "../../common/colors";
import * as Images from "../../assets/images";
import { Button } from "../../components/buttons";
import { Container } from "../../common/container";
import { OnboardingStyles as styles } from "./onboardStyles";

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
        <View style={{ paddingHorizontal: 35 }}>
          <Button
            title="Get started"
            style={styles.button}
            titleColor={Colors.Purple}
            onPress={() => navigation.navigate("login")}
          />
        </View>
      </Container>
    </>
  );
}
