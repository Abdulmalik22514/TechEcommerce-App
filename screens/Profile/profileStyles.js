import { StyleSheet } from "react-native";
import * as Colors from "../../common/colors";

export const ProfileStyles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginTop: 30,
  },
  addressCont: {
    flexDirection: "row",
    marginBottom: 15,
  },
  address: {
    fontSize: 16,
    fontFamily: "raleway400",
    marginLeft: 12,
    width: 180,
    height: 57,
    lineHeight: 19,
  },
  profileText: {
    fontSize: 34,
    fontFamily: "raleway700",
    marginLeft: 10,
  },
  profilePix: {
    width: 76,
    height: 76,
    position: "absolute",
    alignSelf: "center",
    marginTop: -25,
    zIndex: 100,
  },
  profileCont: {
    backgroundColor: Colors.White,
    width: 325,
    height: 167,
    paddingTop: 50,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 50,
  },
  profileName: {
    alignSelf: "center",
    fontFamily: "raleway600",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 12,
  },
});
