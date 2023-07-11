import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginRegister from './screens/LoginRegister';
import SignUp from './screens/SignUp';
import baseThemes from './theme/baseThemes';
import Dashboard from './screens/Dashboard';
import DefaultPage from './screens/DefaultPage';

function App() {
  return (
    <ChakraProvider theme={baseThemes}>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
