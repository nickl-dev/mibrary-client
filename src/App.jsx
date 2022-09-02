import React from 'react'
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.scss'
import Nav from './components/Nav/Nav'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
// import Library from './pages/Library/Library'

// const isLoggedIn = false;

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          {/* <Route exact path="/">
            {isLoggedIn ? <Redirect to="/mybookstack" /> : <Login /> }
          </Route>     */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/library' element={<Library />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
