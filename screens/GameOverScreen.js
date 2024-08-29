import { StyleSheet, Text, View, Image } from "react-native";
import TitleComponent from "../components/TitleComponent";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen(props) {
  return (
    <View style={style.rootContainer}>
      <TitleComponent>Game Over!</TitleComponent>
      <View style={style.ImageContainer}>
        <Image
          style={style.Image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={style.summaryText}>
          You Phone needs <Text style={style.highlight}>{props.rounds}</Text> rounds to guess
          the number <Text style={style.highlight}>{props.guessNum}</Text>...
        </Text>
        <PrimaryButton onPress={props.startNewGame} >Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  ImageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: 16,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
  },
});
