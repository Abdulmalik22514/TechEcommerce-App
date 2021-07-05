import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./screens/Onboarding/onboarding";
import Login from "./screens/Login/login";
import Home from "./screens/Home/home";
import SearchResult from "./screens/SearchResults/search";
import NoResult from "./screens/SearchResults/noResult";
import Details from "./screens/Details/details";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="onboard" component={Onboarding} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="search" component={SearchResult} />
        <Stack.Screen name="noresult" component={NoResult} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
