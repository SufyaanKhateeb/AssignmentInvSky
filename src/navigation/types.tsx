import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  StockDetails: { stockId: string };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type StockDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "StockDetails"
>;

export type StockDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "StockDetails"
>;
