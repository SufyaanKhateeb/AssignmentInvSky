import * as React from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { GraphPage } from './screens/GraphPage'
import StockDetails from './screens/StockDetails'

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      {/* <GraphPage /> */}
      <StockDetails />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
