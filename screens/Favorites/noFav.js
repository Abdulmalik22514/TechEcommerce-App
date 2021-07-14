import React from "react";
import { Image, Text, View } from "react-native";
import { Container } from "../../common/container";
import { Header } from "../../components/header";
import * as Colors from "../../common/colors";
import * as Images from "../../assets/images";
import { Button } from "../../components/buttons";
import { NoFavStyles as styles } from "./noFavStyles";

export default function NoFav({ navigation }) {
  return (
    <>
      <Container backgroundColor={Colors.BgColor} barColor={Colors.BgColor}>
        <View style={{ marginTop: 10 }}>
          <Header title="Favorites" onPress={() => navigation.pop()} />
        </View>
        <View style={styles.container}>
          <Image source={Images.NoFav} style={styles.img} />
          <Text style={styles.nofav}>No favorites yet</Text>
          <Text style={styles.hitButtonText}>
            Hit the orange button down below to Create an order
          </Text>
          <View style={{ width: 250 }}>
            <Button
              title="Start ordering"
              titleColor={Colors.White}
              style={styles.button}
            />
          </View>
        </View>
      </Container>
    </>
  );
}
