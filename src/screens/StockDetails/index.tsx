import React, { useState } from 'react'
import Text from '../../components/Text'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'react-native-feather'
import { Graph } from './Graph'
import { hapticFeedback } from '../../utils/HapticFeedback'

const GraphButton = (props: any) => {
  const { label, pointCount, selectedRange, setSelectedRange, setPointsCount } =
    props
  if (selectedRange === label) {
    return (
      <TouchableOpacity
        style={{ ...styles.graphButtonBase, backgroundColor: 'black' }}
      >
        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins-Medium',
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity
      style={styles.graphButtonBase}
      onPress={() => {
        setSelectedRange(label)
        setPointsCount(pointCount)
      }}
    >
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const graphButtonDetails = [
  { label: '1D', pointCount: 24 * 60 },
  { label: '7D', pointCount: 24 * 60 },
  { label: '1M', pointCount: 24 * 60 },
  { label: '3M', pointCount: 24 * 60 },
  { label: '1Y', pointCount: 24 * 60 },
]

const StockDetails = () => {
  const [pointsCount, setPointsCount] = useState(30 * 24 * 60)
  const [selectedRange, setSelectedRange] = useState('1D')
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => hapticFeedback('impactLight')}
        >
          <ChevronLeft width={30} height={30} color="black" />
        </TouchableOpacity>
        <View style={styles.headerDetails}>
          <Text style={styles.headerDetailsFirst}>Stock Symbol</Text>
          <Text style={styles.headerDetailsSecond}>Stock Name</Text>
        </View>
      </View>
      <View>
        <Text style={styles.priceLable}>$13,223</Text>
        <Text style={styles.priceDetailsLable}>+ $0.68 (0.1%)</Text>
      </View>
      <Graph pointsCount={pointsCount} />
      <View style={styles.graphButtonsContainer}>
        {graphButtonDetails.map(({ label, pointCount }) => {
          return (
            <GraphButton
              key={label}
              label={label}
              pointCount={pointCount}
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              setPointsCount={setPointsCount}
            />
          )
        })}
      </View>
      <View style={styles.stockInfoContainer}>
        <View style={styles.stockInfo}>
          <Text style={{ fontFamily: 'Poppins-Medium' }}>Close Price</Text>
          <Text style={{ fontFamily: 'Poppins-ExtraBold' }}>25,332.00</Text>
        </View>
        <View style={styles.stockInfo}>
          <Text style={{ fontFamily: 'Poppins-Medium' }}>Last Trade Price</Text>
          <Text style={{ fontFamily: 'Poppins-ExtraBold' }}>25,373.00</Text>
        </View>
        <View style={styles.stockInfo}>
          <Text style={{ fontFamily: 'Poppins-Medium' }}>Outstanding</Text>
          <Text style={{ fontFamily: 'Poppins-ExtraBold' }}>
            856,824,860.00
          </Text>
        </View>
        <View style={styles.stockInfo}>
          <Text style={{ fontFamily: 'Poppins-Medium' }}>Market Value</Text>
          <Text style={{ fontFamily: 'Poppins-ExtraBold' }}>
            489,856,924,860.00
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.addToPortfolioButton}
        onPress={() => hapticFeedback('impactLight')}
      >
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
            color: 'white',
          }}
        >
          Add to PortFolio
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  backButton: {
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerDetails: {},
  headerDetailsFirst: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerDetailsSecond: {
    color: 'grey',
    fontSize: 12,
  },
  priceLable: {
    paddingHorizontal: 30,
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 40,
    lineHeight: 45,
  },
  priceDetailsLable: {
    paddingHorizontal: 30,
    color: 'green',
  },
  graphButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  graphButtonBase: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockInfoContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    display: 'flex',
    gap: 5,
  },
  stockInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addToPortfolioButton: {
    marginHorizontal: 30,
    borderRadius: 10,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
})

export default StockDetails
