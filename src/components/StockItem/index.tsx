import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import Text from "../Text";
import { StockType } from "../../screens/Home";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../navigation/StackNavigator/types";
import { SmallGraph } from "../../screens/StockDetails/SmallGraph";

function StockItem(props: StockType): JSX.Element {
  const { stockSymbol, stockName, currentPrice, percentageGain } = props;
  const percentageGainColor = percentageGain < 0 ? "#E3242B" : "#03C04A";
  const navigation: HomeScreenNavigationProp = useNavigation();
  return (
    <Pressable
      style={styles.stockItem}
      onPress={() =>
        navigation.navigate("StockDetails", { stockId: stockName })
      }
    >
      <View style={styles.stockItemTitles}>
        <Text style={styles.titleFirst}>{stockSymbol}</Text>
        <Text style={styles.titleSecond} ellipsizeMode="tail" numberOfLines={1}>
          {stockName}
        </Text>
      </View>
      <View style={styles.graphAndDetailsContainer}>
        <SmallGraph color={percentageGainColor} />
        <View>
          <Text style={styles.detailsFirst}>
            {currentPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
          <Text style={{ ...styles.detailsSecond, color: percentageGainColor }}>
            {percentageGain.toFixed(2)}%
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  stockItem: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    borderColor: "#E5E5E5",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  stockItemTitles: {
    width: 140,
    minWidth: 140,
    maxWidth: 140,
  },
  titleFirst: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 20,
  },
  titleSecond: {
    color: "grey",
    fontSize: 12,
  },
  graphAndDetailsContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsFirst: {
    textAlign: "right",
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  detailsSecond: {
    textAlign: "right",
    fontSize: 14,
  },
});

export default StockItem;
