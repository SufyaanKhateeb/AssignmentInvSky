import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { LineGraph } from "react-native-graph";
import { SelectionDot } from "../../components/CustomSelectionDot";
import { generateRandomGraphData } from "../../data/GraphData";
import { useColors } from "../../hooks/useColors";
import { hapticFeedback } from "../../utils/HapticFeedback";

export function SmallGraph({ color }: { color: string }) {
  const colors = useColors();
  const GRADIENT_FILL_COLORS = [color + "5D", color + "4D", color + "00"];

  const points = generateRandomGraphData(24);

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
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <LineGraph
        style={styles.graph}
        animated={true}
        color={color}
        points={points}
        // gradientFillColors={GRADIENT_FILL_COLORS}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  graph: {
    backgroundColor: "transparent",
    alignSelf: "center",
    // width: "100%",
    width:100,
    aspectRatio: 2,
    marginBottom: 20,
  },
});
