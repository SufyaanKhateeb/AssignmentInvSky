import React from "react";
import StockItem from "../../components/StockItem";
import data from "../../../assets/stocks.json";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export type StockItemType = {
  stockSymbol: string;
  stockName: string;
  currentPrice: number;
  percentageGain: number;
};

const HomeScreen = () => {
  const stocks: StockItemType[] = data.stocks;
  return (
    <>
      <FlatList
        data={stocks}
        keyExtractor={(stockItem) => stockItem.stockName}
        renderItem={({ item: stockItem }) => <StockItem {...stockItem} />}
      />
    </>
  );
};

export default HomeScreen;
