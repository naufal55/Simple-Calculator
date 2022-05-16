import React, { useState } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
} from "native-base";

import { MainButton,Buttons } from "../components";

export default function Calulator() {
 
const [state,setState] = useState({
    display:'',
    result:''
})

const handleOperation = operation => {
    if (operation === 'C') {
      setState({
        display: '',
        result: ''
      })
    }
    else if(operation === '=') {
      setState({
        display: state.result,
        result: ''
      })
    }
    else {
      const display = state.display + operation
      let result = state.result
      try {
        let fixedOperation = display.split('×').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        //join digunakan untuk merubah tampilan string menjadi 
        //sesuai dengan nilai join nya

        result = new String(eval(fixedOperation)).toString()
        // string eval digunakan untuk merubah 1 perintah baris string
        //menjadi code js yang bisa di eksekusi
        //cth: c = "a + b" => c adlah string 
        //eval(c) => eval(a+b) => menjadi sebuah operasi bilangan

      }catch(e) {}
      setState({
        display,
        result
      })
    }
  }

  return (
    <Box
      safeArea
      backgroundColor="primary.900"
      flex={1}
      p={5}
      w="100%"
      mx="auto"
      justifyContent="center"
    >
      <Heading color="primary.100" size="lg" paddingLeft={5}>
        Display
      </Heading>

      <VStack space={2} mt={5}>
        <Box
          bg="primary.100"
          flex={1}
          justifyContent="space-around"
          paddingY={18}
          paddingX={5}
          rounded={4}
          textAlign="right"
        >
          <Text color="black" fontWeight="bold" fontSize={30}>{state.display}</Text>
          {state.result !== '' && <Text color="black" fontSize={18}>{state.result}</Text>}
        </Box>
      </VStack>

      <VStack space={2} mt={5}>
        <HStack >
            <Buttons operation={handleOperation} />
        </HStack>
      </VStack>
    </Box>
  );
}
