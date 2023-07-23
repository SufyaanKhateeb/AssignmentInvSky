import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigator } from "../BottomTabNavigator";
import StockDetails from "../../screens/StockDetails";
import { RootStackParamList } from "./types";
import { Header } from "../../components/Header";

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="StockDetails" component={StockDetails} />
    </Stack.Navigator>
  );
}

export default Navigation;
