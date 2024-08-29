import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import TitleComponent from "../components/TitleComponent";
import { useEffect, useState } from "react";
import GuessNumberText from "../components/GuessNumberText";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItems from "../components/GuessLogItems";

function generateRandNumber(min, max, exclude) {
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum == exclude) {
    return generateRandNumber(min, max, exclude);
  }
  return randNum;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(props) {
  const initialGuess = generateRandNumber(1, 100, props.userNumber);

  const [currentGuessNumber, setCurrentGuessNumber] = useState(initialGuess);

  const [guessNumbers, setGuessNumbers] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuessNumber === props.userNumber) {
      props.gameOver(guessNumbers.length);
    }
  }, [currentGuessNumber, props.userNumber, props.gameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuessNumber < props.userNumber) ||
      (direction === "greater" && currentGuessNumber > props.userNumber)
    ) {
      Alert.alert("Don't lie", "You Know that is wrong !!!.....", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuessNumber;
    } else {
      minBoundary = currentGuessNumber + 1;
    }
    const newGuessNumber = generateRandNumber(
      minBoundary,
      maxBoundary,
      currentGuessNumber
    );
    setCurrentGuessNumber(newGuessNumber);
    setGuessNumbers((previousNumber) => [newGuessNumber, ...previousNumber]);
  }

  const length = guessNumbers.length;

  return (
    <View style={styles.screen}>
      <TitleComponent>Opponent's Guess</TitleComponent>
      <GuessNumberText>{currentGuessNumber}</GuessNumberText>
      <Card>
        <InstructionText>Higher Or Lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer} >
        {/* {guessNumbers.map(guess =>{
          return (
            <Text key={guess}>{guess}</Text>
          )
        })} */}
        <FlatList
          data={guessNumbers}
          renderItem={(itemData) => {
            return (
              <GuessLogItems
                roundNumber={length - itemData.index}
                guess={itemData.item}
              />
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer:{
    flex:1,
    padding:16,
  },
});
