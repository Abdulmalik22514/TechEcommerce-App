import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Alarm, Delete } from "../../assets/svg";
import { Container } from "../../common/container";
import { Header } from "../../components/header";
import * as Colors from "../../common/colors";
import { BasketCard, BasketItems } from "./utils/basketCard";
import { Button } from "../../components/buttons";
import { BasketStyles as styles } from "./basketStyles";
import { TotalBox } from "../../components/total";

export default function Basket({ navigation }) {
  const [value, setValue] = useState(1);
  return (
    <>
      <Container>
        <View style={{ marginTop: 10 }}>
          <Header
            title="Basket"
            icon={<Delete />}
            onPress={() => navigation.pop()}
          />
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
                value={value}
                key={index}
                onAdd={() =>
                  value >= 1 && value < 10 ? setValue(value + 1) : null
                }
                onSubtract={() => (value > 1 ? setValue(value - 1) : null)}
              />
            );
          })}
          <View style={{ marginTop: 170 }}>
            <TotalBox total="Total" amount="954" />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Button
              title="Checkout"
              titleColor={Colors.White}
              onPress={() => navigation.navigate("checkout")}
            />
          </View>
        </View>
      </Container>
    </>
  );
}
