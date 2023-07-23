import React from "react";
import { FlatList, View, TextInput, StyleSheet } from "react-native";
import { Search } from "react-native-feather";
import ListItem from "./ListItem";
import StocksList from "./StocksList";

export type StockType = {
  stockName: string;
  stockSymbol: string;
  currentPrice: number;
  percentageGain: number;
};

const HeaderList = ["Main Market", "Junior Market", "FX Rates", "Fund Markets"];

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState("Main Market");

  return (
    <>
      <View style={styles.actionItemsContainer}>
        <View style={styles.searchBar}>
          <View
            style={{
              display: "flex",
              padding: 10,
            }}
          >
            <Search color="white" />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={setSearchTerm}
            value={searchTerm}
            placeholder={"Search markets"}
            placeholderTextColor={"white"}
          />
        </View>

        <FlatList
          style={styles.flatList}
          horizontal={true}
          data={HeaderList}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ListItem
              label={item}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          )}
        />
      </View>
      <StocksList searchTerm={searchTerm} />
    </>
  );
};

const styles = StyleSheet.create({
  actionItemsContainer: {
    backgroundColor: "#2c53f6",
    paddingHorizontal: 20,
  },
  searchBar: {
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff44",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    height: 40,
    color: "white",
    backgroundColor: "transparent",
    fontSize: 18,
    padding: 10,
  },
  flatList: {
    height: 70,
  },
  flatListContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
