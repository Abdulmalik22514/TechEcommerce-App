import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const CheckoutStyles = StyleSheet.create({
  shippingCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 50,
  },
  shippingInfo: {
    fontFamily: "raleway600",
    fontSize: 18,
  },
  changeText: {
    color: Colors.Purple,
    fontSize: 16,
    fontFamily: "raleway600",
  },
  addressCont: {
    backgroundColor: Colors.White,
    paddingHorizontal: 25,
    paddingTop: 20,
    width: "100%",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 40,
  },
});
