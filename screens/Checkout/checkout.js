import React, { useState } from "react";
import { View, Text } from "react-native";
import { Container } from "../../common/container";
import { Header } from "../../components/header";
import * as Colors from "../../common/colors";
import { AddressCard, AddressInfo } from "./utils/addressCard";
import { CardTypes, PaymentCard } from "./utils/paymentCard";
import { TotalBox } from "../../components/total";
import { Button } from "../../components/buttons";
import { CheckoutStyles as styles } from "./checkoutStyles";

export default function Checkout({ navigation }) {
  const [active, setActive] = useState("**** **** **** 1234");
  return (
    <>
      <Container backgroundColor={Colors.BgColor} barColor={Colors.BgColor}>
        <View>
          <Header title="Checkout" />
          <View style={{ paddingHorizontal: 40 }}>
            <View style={styles.shippingCont}>
              <Text style={styles.shippingInfo}>Shipping information</Text>
              <Text style={styles.changeText}>change</Text>
            </View>
            <View style={styles.addressCont}>
              {AddressInfo.map((item, index) => {
                return (
                  <AddressCard
                    icon={item.icon}
                    title={item.title}
                    key={index}
                  />
                );
              })}
            </View>
            <Text style={styles.shippingInfo}>Payment Method</Text>
            <View style={styles.addressCont}>
              {CardTypes.map((item, index) => {
                return (
                  <PaymentCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    onPress={() => setActive(item.title)}
                    isActive={item.title === active}
                  />
                );
              })}
            </View>
            <View style={{ marginTop: 20 }}>
              <TotalBox total="Total" amount="954" />
            </View>
            <Button title="Confirm and pay" titleColor={Colors.White} />
          </View>
        </View>
      </Container>
    </>
  );
}
