import { StyleSheet } from "react-native";
import * as Colors from "../../../common/colors";

export const NoResultStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  tryMore: {
    color: Colors.Black,
    fontWeight: "300",
    textAlign: "center",
    fontSize: 18,
    width: 314,
    alignSelf: "center",
    marginTop: 30,
    height: 48,
    lineHeight: 23,
    opacity: 0.5,
  },
  result: {
    color: Colors.Black,
    fontSize: 30,
    fontWeight: "500",
    alignSelf: "center",
  },
  NotFound: {
    width: "100%",
    height: 300,
  },
});
