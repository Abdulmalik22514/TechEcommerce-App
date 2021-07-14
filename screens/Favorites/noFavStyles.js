import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const NoFavStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 40,
    paddingVertical: 60,
  },
  button: {
    backgroundColor: Colors.ButtonColor,
    height: 52,
  },
  img: {
    width: 360,
    height: 360,
    marginBottom: -30,
  },
  nofav: {
    fontSize: 28,
    fontFamily: "raleway600",
  },
  hitButtonText: {
    fontFamily: "raleway400",
    fontSize: 17,
    width: 217,
    height: 48,
    textAlign: "center",
    marginVertical: 10,
    lineHeight: 24,
    opacity: 0.57,
  },
});
