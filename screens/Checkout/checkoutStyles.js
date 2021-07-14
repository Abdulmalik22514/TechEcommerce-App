import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const CheckoutStyles = StyleSheet.create({
  cardDetails: {
    backgroundColor: Colors.CardColor,
    padding: 15,
    width: "100%",
    borderRadius: 10,
    // marginTop: 30,
    // marginBottom: 40,
    borderColor: Colors.CardBorder,
    borderWidth: 1,
  },
  rosinaName: {
    color: Colors.Grey,
    fontFamily: "raleway600",
    fontSize: 17,
  },
  cardNo: {
    fontSize: 39,
    // alignSelf: "center",
    fontFamily: "raleway400",
    marginTop: 15,
  },
  products: {
    color: Colors.Grey,
    fontSize: 16,
    fontFamily: "raleway600",
  },
  modalBox: {
    height: 520,
    backgroundColor: Colors.White,
    paddingHorizontal: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    // marginTop: 50,
  },
  shippingCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 50,
  },
  rosinaCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  confirmPayment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 40,
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
