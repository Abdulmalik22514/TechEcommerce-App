import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Alarm, Delete } from "../../assets/svg";
import { Container } from "../../common/container";
import { Header } from "../../components/header";
import * as Colors from "../../common/colors";
import { BasketCard, BasketItems } from "./utils/basketCard";
import { Button } from "../../components/buttons";
import { BasketStyles as styles } from "./basketStyles";

export default function Basket() {
  return (
    <>
      <Container>
        <View style={{ marginTop: 10 }}>
          <Header title="Basket" icon={<Delete />} />
        </View>
        <View style={styles.deliveryBox}>
          <Alarm />
          <Text style={styles.deliveryText}>
            Delivery for FREE until the end of the month
          </Text>
        </View>
        <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
          {BasketItems.map((item, index) => {
            return (
              <BasketCard
                picture={item.picture}
                label={item.label}
                amount={item.amount}
                val="1"
                key={index}
              />
            );
          })}
          <View style={styles.totalBox}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.amount}>{`$ ${954}`}</Text>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Button title="Checkout" titleColor={Colors.White} />
          </View>
        </View>
      </Container>
    </>
  );
}
