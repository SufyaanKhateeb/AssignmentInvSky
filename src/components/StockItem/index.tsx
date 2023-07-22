import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Text';
import {StockItemType} from '../../screens/Home';

function StockItem(props: StockItemType): JSX.Element {
  const {stockSymbol, stockName, currentPrice, percentageGain} = props;
  const percentageGainColor = percentageGain < 0 ? styles.loss : styles.profit;
  return (
    <View style={styles.stockItem}>
      <View style={styles.stockItemTitles}>
        <Text style={styles.titleFirst}>{stockSymbol}</Text>
        <Text style={styles.titleSecond} ellipsizeMode="tail" numberOfLines={1}>
          {stockName}
        </Text>
      </View>
      <View style={styles.stockItemGraph}></View>
      <View style={styles.stockItemDetails}>
        <Text style={styles.detailsFirst}>
          {currentPrice
            // .toFixed(2)
            .toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        </Text>
        <Text style={{...styles.detailsSecond, ...percentageGainColor}}>
          {percentageGain.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stockItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#E5E5E5',
    borderBottomWidth: 2,
    padding: 20,
  },
  stockItemTitles: {
    width: 120,
  },
  stockItemGraph: {},
  stockItemDetails: {},
  titleFirst: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  titleSecond: {
    color: 'grey',
    fontSize: 12,
  },
  detailsFirst: {
    textAlign: 'right',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  detailsSecond: {
    textAlign: 'right',
    fontSize: 14,
  },
  profit: {
    color: 'green',
  },
  loss: {
    color: 'red',
  },
});

export default StockItem;
