import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MainButton(props) {

const styles = StyleSheet.create({
    container: {
      backgroundColor:props.color ,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: 3,
    },
    text: {
      paddingVertical: 10,
      color: "white",
      fontSize: 30,
    },
  });

  return (
    <TouchableOpacity
      onPress={() => props.operation(props.char)}
      style={styles.container}
    >
      <Text style={styles.text}>{props.char}</Text>
    </TouchableOpacity>
  );

  
}


