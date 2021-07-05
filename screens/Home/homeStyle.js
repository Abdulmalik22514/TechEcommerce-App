import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const HomeStyles = StyleSheet.create({
  moreBox: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 30,
    alignItems: "center",
    width: 95,
    justifyContent: "space-between",
  },
  seemore: {
    color: Colors.Purple,
    fontWeight: "700",
    fontSize: 15,
    marginTop: -3,
  },
  scrollView: {
    height: 400,
    marginTop: 20,
  },
  scrollCont: {
    marginLeft: 40,
    marginTop: 50,
    marginRight: 10,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    marginTop: 40,
    marginRight: 10,
  },
  orderText: {
    color: Colors.Black,
    fontSize: 34,
    fontWeight: "700",
    width: 243,
    marginLeft: 40,
  },
  input: {
    fontWeight: "500",
    fontSize: 17,
    marginLeft: 13,
    paddingHorizontal: 5,
  },
  topBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: 50,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    width: 270,
    borderRadius: 50,
    borderColor: Colors.Gray,
    borderWidth: 1,
    height: 60,
    marginLeft: 30,
    padding: 20,
  },
});
