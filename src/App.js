import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.scss'
import Nav from './components/Nav/Nav'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MyReadingList from './pages/MyReadingList/MyReadingList'

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/my-reading-list' element={<MyReadingList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
