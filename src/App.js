import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { Logo } from './Logo';
import NavBar from './components/NavBar';
import SignLogin from './components/SignLogin';
import LoginRegister from './screens/LoginRegister';

function App() {
  return (
    <ChakraProvider theme={theme}>
      
      <LoginRegister />
    </ChakraProvider>
  );
}

export default App;
