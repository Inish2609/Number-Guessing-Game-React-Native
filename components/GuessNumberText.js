import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";

export default function GuessNumberText(props) {
  return (
    <View style={style.container}>
      <Text style={style.numberText}>{props.children}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
