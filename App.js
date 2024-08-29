import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  const [gameIsOver, setGameIsOver] = useState(true);

  const [numberOfRounds, setNumberOfRounds] = useState(0);

  // function roundsHandler() {
  //   setNumberOfRounds(numberOfRounds + 1);
  // }

  function newGameHandler() {
    setPickedNumber(null);
    setNumberOfRounds(0);
  }

  function pickedNumberHandler(number) {
    setPickedNumber(number);
    setGameIsOver(false);
  }

  function gameOverHandler(number) {
    setGameIsOver(true);
    setNumberOfRounds(number);
  }

  let screen = <GameStartScreen confirmNumber={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = (
      <GameScreen
        userNumber={pickedNumber}
        gameOver={gameOverHandler}
      />
    );
  }

  if (pickedNumber && gameIsOver) {
    screen = (
      <GameOverScreen
        guessNum={pickedNumber}
        rounds={numberOfRounds}
        startNewGame={newGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.rootContainer}
    >
      <StatusBar />
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.rootContainer}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
