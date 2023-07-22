import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { LineGraph } from "react-native-graph";
// import type { GraphRange } from '../../../../src/LineGraphProps'
import { SelectionDot } from "../../components/CustomSelectionDot";
import { generateRandomGraphData } from "../../data/GraphData";
import { useColors } from "../../hooks/useColors";
import { hapticFeedback } from "../../utils/HapticFeedback";

const COLOR = "#000";
const GRADIENT_FILL_COLORS = ["#0000005D", "#0000004D", "#00000000"];

export function Graph({ pointsCount }: { pointsCount: number }) {
  const colors = useColors();

  const points = generateRandomGraphData(pointsCount);

  // const refreshData = useCallback(() => {
  //   setPoints(generateRandomGraphData(pointsCount))
  //   hapticFeedback('impactLight')
  // }, [])

  const highestDate = useMemo(
    () =>
      points.length !== 0 && points[points.length - 1] != null
        ? points[points.length - 1]!.date
        : undefined,
    [points]
  );
  const range: any | undefined = useMemo(() => {
    if (points.length !== 0 && highestDate != null) {
      return {
        x: {
          min: points[0]!.date,
          max: new Date(highestDate.getTime() + 50 * 1000 * 60 * 60 * 24),
        },
        y: {
          min: -200,
          max: 200,
        },
      };
    } else {
      return {
        y: {
          min: -200,
          max: 200,
        },
      };
    }
  }, [highestDate, points]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <LineGraph
        style={styles.graph}
        animated={true}
        color={COLOR}
        points={points}
        gradientFillColors={GRADIENT_FILL_COLORS}
        enablePanGesture={true}
        onGestureStart={() => hapticFeedback("impactLight")}
        SelectionDot={SelectionDot}
        // range={range}
      />
      {/* <Button title="Refresh" onPress={refreshData} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  graph: {
    alignSelf: "center",
    width: "100%",
    aspectRatio: 1.6,
    marginBottom: 20,
  },
});
