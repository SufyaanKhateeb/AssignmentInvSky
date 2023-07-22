import React, { useState } from 'react'
import Text from '../../components/Text'
import { Button, StyleSheet, View, TouchableOpacity } from 'react-native'
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
        <Text style={{ color: 'white' }}>{label}</Text>
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
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

const graphButtonDetails = [
  { label: '1D', pointCount: 24 * 60 },
  { label: '7D', pointCount: 7 * 24 * 60 },
  { label: '1M', pointCount: 30 * 24 * 60 },
  { label: '3M', pointCount: 3 * 30 * 24 * 60 },
  { label: '1Y', pointCount: 12 * 30 * 24 * 60 },
]

const StockDetails = () => {
  const [pointsCount, setPointsCount] = useState(30 * 24 * 60)
  const [selectedRange, setSelectedRange] = useState('1D')
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <ChevronLeft width={30} height={30} color="black" />
        </View>
        <View style={styles.headerDetails}>
          <Text style={styles.headerDetailsFirst}>Stock Symbol</Text>
          <Text style={styles.headerDetailsSecond}>Stock Name</Text>
        </View>
      </View>
      <Text style={styles.priceLable}>$13,223</Text>
      <Text style={styles.priceDetailsLable}>+ $0.68 (0.1%)</Text>
      <Graph pointsCount={pointsCount} />
      <View style={styles.graphButtonsContainer}>
        {graphButtonDetails.map(({ label, pointCount }) => {
          return (
            <GraphButton
              label={label}
              pointCount={pointCount}
              selectedRange={selectedRange}
              setSelectedRange={setSelectedRange}
              setPointsCount={setPointsCount}
            />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
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
})

export default StockDetails
