import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Colors from "../common/colors";

export const Input = ({
  icon,
  title,
  style,
  placeholder,
  secure,
  isVisible,
}) => {
  return (
    <View style={{ marginTop: 30 }}>
      <View style={styles.labelBox}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.Grey}
          secureTextEntry={secure}
        />
        <TouchableOpacity>
          {isVisible ? <Text style={styles.show}>Show</Text> : <View />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const CustomText = ({ title, isCenter }) => {
  return (
    <Text style={[styles.passcode, isCenter && styles.centerText]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    alignItems: "center",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 0.3,
    width: "85%",
    paddingRight: 10,
  },
  centerText: {
    textAlign: "center",
    marginTop: 20,
  },
  passcode: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.Purple,
    marginTop: 10,
    marginBottom: 40,
  },
  show: {
    color: Colors.Purple,
    fontWeight: "600",
    fontSize: 16,
  },
  inputView: {
    width: "100%",
    borderBottomColor: Colors.Gray,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  labelBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: Colors.Grey,
    fontWeight: "400",
    marginLeft: 10,
    letterSpacing: 0.2,
  },
});
