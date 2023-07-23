import { Pressable, StyleSheet, Text } from "react-native";

const ListItem = ({ label, selectedItem, setSelectedItem }: any) => {
  return (
    <Pressable onPress={() => setSelectedItem(label)}>
      <Text
        style={
          selectedItem === label ? styles.listItemSelected : styles.headListItem
        }
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  headListItem: {
    marginRight: 20,
    color: "#9cb0d7",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  listItemSelected: {
    marginRight: 20,
    color: "white",
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
});

export default ListItem;
