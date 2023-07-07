import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginRegister from './screens/LoginRegister';
import SignUp from './screens/SignUp';
import baseThemes from './theme/baseThemes';
import Layout from './screens/Layout';
import Dashboard from './screens/Dashboard';
import NavBar from './components/NavBar';
import DefaultPage from './screens/DefaultPage';

function App() {
  return (
    <ChakraProvider theme={baseThemes}>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
