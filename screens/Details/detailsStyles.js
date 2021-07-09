import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const DetailsStyles = StyleSheet.create({
  img: {
    width: 230,
    height: 260,
    alignSelf: "center",
    marginTop: 10,
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
  },
  moreBox: {
    flexDirection: "row",
    marginRight: 30,
    alignItems: "center",
    width: 145,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  seemore: {
    color: Colors.Purple,
    fontFamily: "raleway700",
    fontSize: 16,
    marginTop: -3,
  },
  purchases: {
    fontSize: 17,
    fontFamily: "raleway400",
    lineHeight: 21,
    color: Colors.Black,
    opacity: 0.5,
    letterSpacing: 0.1,
    width: 330,
    marginBottom: 15,
  },
  getApple: {
    fontFamily: "raleway700",
    fontSize: 17,
    marginBottom: 10,
  },
  bottomBox: {
    flex: 1,
    backgroundColor: Colors.White,
    marginTop: 40,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 30,
  },
  colorBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 30,
  },
  apple2020: {
    alignSelf: "center",
    color: Colors.Black,
    fontFamily: "raleway600",
    fontSize: 28,
  },
  colorsText: {
    color: Colors.Black,
    fontSize: 17,
    fontFamily: "raleway600",
    marginTop: 15,
  },
});
