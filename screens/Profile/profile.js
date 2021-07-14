import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Container } from "../../common/container";
import * as Colors from "../../common/colors";
import { Header } from "../../components/header";
import * as Images from "../../assets/images";
import { Locator } from "../../assets/svg";
import { ProfileCard, ProfileEdit } from "./utils/profileCard";
import { ProfileStyles as styles } from "./profileStyles";

export default function ProfilePage({ navigation }) {
  return (
    <>
      <Container backgroundColor={Colors.BgColor} barColor={Colors.BgColor}>
        <Header />
        <View style={styles.container}>
          <Text style={styles.profileText}>My profile</Text>
          <View style={styles.profileCont}>
            <Image source={Images.ProfilePix} style={styles.profilePix} />
            <Text style={styles.profileName}>Rosina Doe</Text>
            <View style={styles.addressCont}>
              <Locator />
              <Text style={styles.address}>
                Address: 43 Oxford Road M13 4GR Manchester, UK
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            {ProfileEdit.map((item, index) => {
              return <ProfileCard title={item.title} />;
            })}
          </View>
        </View>
      </Container>
    </>
  );
}
