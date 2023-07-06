import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginRegister from './screens/LoginRegister';
import SignUp from './screens/SignUp';
import baseThemes from './theme/baseThemes';
import Layout from './screens/Layout';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <ChakraProvider theme={baseThemes}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
