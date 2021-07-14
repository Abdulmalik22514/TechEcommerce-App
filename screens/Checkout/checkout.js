import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Container } from "../../common/container";
import { Header } from "../../components/header";
import * as Colors from "../../common/colors";
import { AddressCard, AddressInfo } from "./utils/addressCard";
import { CardTypes, PaymentCard } from "./utils/paymentCard";
import { TotalBox } from "../../components/total";
import { Button } from "../../components/buttons";
import { CheckoutStyles as styles } from "./checkoutStyles";
import Modal from "react-native-modal";
import * as Images from "../../assets/images";

export default function Checkout({ navigation }) {
  // const {title, label, icon}
  const [active, setActive] = useState("**** **** **** 1234");
  const [modal, setModal] = useState(false);
  return (
    <>
      <Container backgroundColor={Colors.BgColor} barColor={Colors.BgColor}>
        <View>
          <Header title="Checkout" onPress={() => navigation.pop()} />
          <View style={{ paddingHorizontal: 40 }}>
            <View style={styles.shippingCont}>
              <Text style={styles.shippingInfo}>Shipping information</Text>
              <TouchableOpacity>
                <Text style={styles.changeText}>change</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.addressCont}>
              {AddressInfo.map((item, index) => {
                return (
                  <AddressCard
                    icon={item.icon}
                    label={item.label}
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
            <Button
              title="Confirm and pay"
              titleColor={Colors.White}
              onPress={() => setModal(true)}
            />
          </View>
        </View>
      </Container>
      <View>
        <Modal isVisible={modal} style={{ marginHorizontal: 0 }}>
          <View
            style={{
              height: 130,
            }}
          >
            <View style={styles.modalBox}>
              <View style={styles.confirmPayment}>
                <Text style={styles.shippingInfo}>Confirm and pay</Text>
                <Text style={styles.products}>
                  products:<Text style={{ color: Colors.Black }}>2</Text>
                </Text>
              </View>
              <View style={styles.cardDetails}>
                <View style={styles.cardCont}>
                  <Text style={styles.shippingInfo}>My credit card</Text>
                  <Image source={Images.Visa} />
                </View>
                <Text style={styles.cardNo}>**** **** **** 1234</Text>
                <View style={styles.rosinaCont}>
                  <Text style={styles.rosinaName}>Rosina Doe</Text>
                  <Text style={styles.rosinaName}>04/26</Text>
                </View>
              </View>

              <View style={{ marginTop: 50 }}>
                <TotalBox total="Total" amount="954" />
              </View>
              <Button
                title="Pay now"
                titleColor={Colors.White}
                onPress={() => {
                  navigation.navigate("nofav");
                  setModal(false);
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
