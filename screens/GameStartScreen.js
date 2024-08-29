import {
  Alert,
  StyleSheet,
  TextInput,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import TitleComponent from "../components/TitleComponent";
import Colors from "../constants/Colors";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

export default function GameStartScreen(props) {
  const [enteredValue, setEnteredValue] = useState("");

  function inputValueHandler(value) {
    setEnteredValue(value);
  }

  function resetValueHandler() {
    setEnteredValue("");
  }

  function confirmationHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be in a Range of 1-99", [
        { text: "Okay", style: "destructive", onPress: resetValueHandler },
      ]);
      return;
    }
    props.confirmNumber(chosenNumber);
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={styles.rootContainer}>
          <TitleComponent>GUess My Number</TitleComponent>
          <Card>
            <InstructionText>Enter the Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredValue}
              onChangeText={inputValueHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetValueHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmationHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    borderBottomWidth: 2,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
});
