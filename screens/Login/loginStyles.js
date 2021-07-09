import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const LoginStyles = StyleSheet.create({
  label: {
    fontWeight: "600",
    fontSize: 18,
  },
  findGadget: {
    fontSize: 63,
    fontFamily: "raleway800",
    color: Colors.White,
    marginTop: 30,
    alignSelf: "center",
    width: 300,
    letterSpacing: 0.8,
    marginBottom: 50,
  },
  bottomBox: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 40,
    flex: 1,
  },
});
