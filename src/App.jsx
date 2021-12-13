import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login'

// Component
function App() {

  // State / Hooks
  const [state, setState] = useState(null)

  // useEffect
  useEffect(() => {})

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
