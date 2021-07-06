import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Heart, Seemore } from "../../assets/svg";
import { Header } from "../../components/header";
import * as Images from "../../assets/images";
import * as Colors from "../../common/colors";
import { Container } from "../../common/container";
import { ColorType, ColorTypeCard } from "./utils/detailsCard";
import { Button } from "../../components/buttons";
import { DetailsStyles as styles } from "./detailsStyles";
export default function Details({ navigation, route }) {
  const { details } = route.params;
  const { amount, label } = details;
  const image = getImage(label);
  return (
    <>
      <Container barColor={"#F6F6F9"} backgroundColor="#F6F6F9">
        <View>
          <Header
            icon={<Heart />}
            onPress={() => navigation.navigate("search")}
          />
          <Image source={image} resizeMode={"contain"} style={styles.img} />
        </View>
        <View style={styles.bottomBox}>
          <Text style={styles.apple2020}>{`2020 ${label} 10.9"`}</Text>
          <Text style={styles.colorsText}>Colors</Text>
          <View style={styles.colorBox}>
            {ColorType.map((item, index) => {
              return (
                <ColorTypeCard
                  title={item.title}
                  key={index}
                  backgroundColor={item.color}
                />
              );
            })}
          </View>
          <Text style={styles.getApple}>Get Apple TV+ free for a year</Text>
          <Text style={styles.purchases}>
            Available when you purchase any new iPhone, iPad, iPod Touch, Mac or
            Apple TV, £4.99/month after free trial.
          </Text>
          <View style={styles.moreBox}>
            <Text style={styles.seemore}>Full description</Text>
            <TouchableOpacity>
              <Seemore />
            </TouchableOpacity>
          </View>
          <View style={styles.totalBox}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.amount}>{`$ ${amount}`}</Text>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Button
              title="Add to basket"
              titleColor={Colors.White}
              onPress={() => navigation.navigate("basket")}
            />
          </View>
        </View>
      </Container>
    </>
  );
}

const getImage = (label) => {
  switch (label) {
    case "Apple iPad Air":
      return Images.IpadAir;
    case "Apple Watch":
      return Images.AppleWatch;
    case "Apple MacBook":
      return Images.MacBook;
    case "Apple iPhone":
      return Images.Iphone;

    default:
      return null;
  }
};
