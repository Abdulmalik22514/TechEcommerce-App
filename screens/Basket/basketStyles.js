import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const BasketStyles = StyleSheet.create({
  deliveryBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.DeliveryColour,
    width: "74%",
    height: 45,
    borderRadius: 10,
    justifyContent: "space-between",
    marginTop: 40,
    padding: 12,
  },
  deliveryText: {
    fontFamily: "raleway600",
    fontSize: 12,
    color: Colors.Black,
  },
  amount: {
    fontSize: 25,
    fontFamily: "raleway700",
    color: Colors.Purple,
  },
  total: {
    fontFamily: "raleway400",
    fontSize: 19,
    color: Colors.Black,
  },
  totalBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 170,
  },
});
