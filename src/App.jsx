import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import LoginOrRegister from './pages/LoginOrRegister/LoginOrRegister';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<LoginOrRegister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
