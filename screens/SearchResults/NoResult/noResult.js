import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Colors from "../../../common/colors";
import { SearchBox } from "../utils/searchBox";
import * as Images from "../../../assets/images";
import { Container } from "../../../common/container";
import { NoResultStyles as styles } from "./noResultStyles";

export default function NoResult({ navigation }) {
  return (
    <>
      <Container>
        <View style={{ paddingHorizontal: 25 }}>
          <SearchBox placeholder="Apppi" onPress={() => navigation.pop()} />
          <Image
            source={Images.NotFound}
            style={styles.NotFound}
            resizeMode={"cover"}
          />
          <Text style={styles.result}>Item not found</Text>
          <Text style={styles.tryMore}>
            Try a more generic search term or try looking for alternative
            products.
          </Text>
        </View>
      </Container>
    </>
  );
}
