import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Menu, SearchIcon, Seemore } from "../../assets/svg";
import * as Colors from "../../common/colors";
import {
  Categories,
  CategoriesCard,
  Wearables,
  WearablesCard,
} from "./utils/itemCard";
import { HomeStyles as styles } from "./homeStyle";

export default function Home({ navigation }) {
  const [active, setActive] = useState("Wearables");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.topBox}>
        <Menu />
        <View style={styles.searchBox}>
          <SearchIcon />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={Colors.Grey}
          />
        </View>
      </View>
      <Text style={styles.orderText}>Order online collect in store</Text>
      <View style={styles.topNav}>
        {Categories.map((item, index) => {
          return (
            <CategoriesCard
              key={index}
              title={item.title}
              isActive={item.title === active}
              onPress={() => setActive(item.title)}
            />
          );
        })}
      </View>
      <View style={styles.scrollView}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollCont}
        >
          {Wearables.map((item, index) => {
            return (
              <WearablesCard
                key={index}
                label={item.label}
                image={item.image}
                type={item.type}
                amount={item.amount}
              />
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.moreBox}>
        <Text style={styles.seemore}>see more</Text>
        <TouchableOpacity>
          <Seemore />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
