import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginRegister from './screens/LoginRegister';
import SignUp from './screens/SignUp';
import baseThemes from './theme/baseThemes';

function App() {
  return (
    <ChakraProvider theme={baseThemes}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
