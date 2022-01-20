import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.scss'
import Navbar from './components/Navbar/Navbar'
import LoginOrRegister from './pages/LoginOrRegister/LoginOrRegister'
import Library from './pages/Library/Library'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' exact element={<LoginOrRegister />} />
          <Route path='/library' element={<Library />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
