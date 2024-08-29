import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

export default function GuessLogItems(props) {
  return (
    <View style={styles.listItem}>
      <Text>#{props.roundNumber}</Text>
      <Text>Opponent Guess : {props.guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
