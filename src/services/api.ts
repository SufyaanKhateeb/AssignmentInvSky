import stockDetailsList from "../data/stockDetails.json";
import stocksList from "../data/stocks.json";

export const getStockDetailsFromDS = async (stockId: string) => {
  try {
    const stockDetails = stockDetailsList.stocks.find(
      (stockDetails) => stockDetails.stockName === stockId
    );
    if (!stockDetails)
      return {
        stockName: "monkey",
        stockSymbol: "MONK",
        currentPrice: 6969,
        percentageGain: 420,
      };
    return stockDetails;
  } catch (e) {
    console.log(e);
    return;
  }
};
