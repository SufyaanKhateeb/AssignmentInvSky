import React, { useEffect, useState } from "react";
import StockItem from "../../components/StockItem";
import { FlatList, ActivityIndicator } from "react-native";
import { getStocksFromDS } from "../../services/api";

export type StockType = {
  stockName: string;
  stockSymbol: string;
  currentPrice: number;
  percentageGain: number;
};

const Portfolio = () => {
  const [stocksList, setStocksList] = useState<StockType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStocks = async () => {
    setIsLoading(true);
    const res = await getStocksFromDS();
    if (res) setStocksList(res);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStocks();
  }, []);

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

export default Portfolio;
