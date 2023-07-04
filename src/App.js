import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginRegister from './screens/LoginRegister';
import SignUp from './screens/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
