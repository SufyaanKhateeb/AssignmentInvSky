import React, { useEffect, useState, useCallback } from "react";
import StockItem from "../../components/StockItem";
import { FlatList, ActivityIndicator } from "react-native";
import {
  getStocksFromDS,
  getStocksFromDSWithSearchTerm,
} from "../../services/api";

export type StockType = {
  stockName: string;
  stockSymbol: string;
  currentPrice: number;
  percentageGain: number;
};

const StocksList = (props: any) => {
  const [stocksList, setStocksList] = useState<StockType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStocks = useCallback(async (searchTerm: string) => {
    setIsLoading(true);
    if (searchTerm == "") {
      const res = await getStocksFromDS();
      if (res) setStocksList(res);
    } else {
      const res = await getStocksFromDSWithSearchTerm(searchTerm);
      if (res) setStocksList(res);
    }
    setIsLoading(false);
  }, []);

  //   useEffect(() => {
  //     console.log("inside here");
  //     const timeout = setTimeout(() => fetchStocks(searchTerm), 2000);
  //     return () => clearTimeout(timeout);
  //   }, [searchTerm]);
  useEffect(() => {
    fetchStocks("");
  }, []);

  useEffect(() => {
    fetchStocks(props.searchTerm);
  }, [props.searchTerm]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <FlatList
        data={stocksList}
        keyExtractor={(stockItem) => stockItem.stockName}
        renderItem={({ item: stockItem }) => <StockItem {...stockItem} />}
      />
    </>
  );
};

export default StocksList;
