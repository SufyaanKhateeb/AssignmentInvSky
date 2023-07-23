import stockDetailsList from "../data/stockDetails.json";
import stocksList from "../data/stocks.json";

export const getStocksFromDS = async () => {
  try {
    const stocks = stocksList.stocks;
    return stocks;
  } catch (e) {
    console.log(e);
    return;
  }
};

export const getStocksFromDSWithSearchTerm = async (searchTerm: string) => {
  try {
    const stocks = stocksList.stocks.filter(
      (stock) =>
        stock.stockName.toLowerCase().includes(searchTerm) ||
        stock.stockSymbol.toLowerCase().includes(searchTerm)
    );
    return stocks;
  } catch (e) {
    console.log(e);
    return;
  }
};

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
