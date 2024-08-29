import { StyleSheet, View } from "react-native";

export default function Card(props){
    return (
        <View style={styles.inputContainer}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 30,
        marginHorizontal: 24,
        backgroundColor: "#42063c",
        borderRadius: 10,
        padding: 16,
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: "center",
      },
})