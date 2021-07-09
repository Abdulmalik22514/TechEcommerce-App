import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./screens/Onboarding/onboarding";
import Login from "./screens/Login/login";
import Home from "./screens/Home/home";
import Details from "./screens/Details/details";
import SearchResult from "./screens/SearchResults/Search/search";
import NoResult from "./screens/SearchResults/NoResult/noResult";
import Basket from "./screens/Basket/basket";

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
        <Stack.Screen name="basket" component={Basket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
