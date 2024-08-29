import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

export default function InstructionText(props) {
  return <Text style={styles.instructionText}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
