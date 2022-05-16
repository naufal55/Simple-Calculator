import { HStack } from "native-base";
import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import MainButton from "./MainButton";


export default function Buttons (props) {
  const numbers = [[],
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", "=", "%"],
  ];
  const operations = ["C", "÷", "×", "-", "+"];

  const operatorSelected = (operation) => {
    props.operation(operation);
  };

  return (
    <HStack style={styles.container}>
      <SafeAreaView style={styles.numbers}>
        {numbers.map((row, index) => ( // di extract ada 4 array 7...,4..,1..,0...
          <HStack key={index} style={styles.row}>
            {row.map((char) => ( // di extract 7,8,9 ada 3 array
              <MainButton
                color={char !== '=' && char !== '%' ? "blue" : "darkblue"}
                key={char}
                char={char}
                operation={operatorSelected}
              />
            ))}
          </HStack>
        ))}
      </SafeAreaView>
      <SafeAreaView style={styles.operations}>
        {operations.map((char) => (
          <MainButton color="darkblue" 
          key={char} 
          char={char} 
          operation={operatorSelected} />
        ))}
      </SafeAreaView>
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  row: {
    flex: 1,
  },
  numbers: {
    flex: 3,
  },
  operations: {
    flex: 1,
    // backgroundColor: "darkblue",
  },
});
