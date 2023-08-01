import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginRegister from './screens/LoginRegister';
import SignUp from './screens/SignUp';
import baseThemes from './theme/baseThemes';
import Dashboard from './screens/Dashboard';
import DefaultPage from './screens/DefaultPage';
import Exist from './screens/Exist';
import CreateComplaint from './screens/CreateComplaint';
import Tester from './components/Forms/Tester'


function App() {
  return (
    <ChakraProvider theme={baseThemes}>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/testing" element={<Tester />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createComplaint" element={<CreateComplaint />} />
          <Route path="/*" element={<Exist />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
