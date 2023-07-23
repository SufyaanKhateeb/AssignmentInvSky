import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../Text";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const Header = ({ title }: any) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.menuNotifContainer}>
        <MaterialIcons color="white" name="menu" size={40} />
        <MaterialIcons color="white" name="notifications-none" size={30} />
      </View>
      <Text
        style={{
          color: "white",
          fontFamily: "Poppins-ExtraBold",
          fontSize: 40,
          marginTop: 40,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#2c53f6",
    paddingHorizontal: 20,
  },
  menuNotifContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});
