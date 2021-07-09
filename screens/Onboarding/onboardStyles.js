import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const OnboardingStyles = StyleSheet.create({
  findGadget: {
    fontSize: 60,
    color: Colors.White,
    marginTop: 30,
    alignSelf: "center",
    width: 290,
    letterSpacing: 0.8,
    fontFamily: "raleway800",
  },
  splashImg: {
    width: "100%",
    height: 450,
  },
  button: {
    backgroundColor: Colors.White,
    marginTop: 50,
  },
});
