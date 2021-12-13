import logo from './logo.svg';
import logo2 from './books-stack-of-three.svg'
import './App.css';
import React, { useState } from 'react'

function App() {

  const [pageLogo, setPageLogo] = useState(logo);
  const [randomText, setRandomText] = useState('');

  function changeLogo () {
     pageLogo === logo ? setPageLogo(logo2) : setPageLogo(logo)
     console.log(`pageLogo is now ${pageLogo}`)
  }

  function handleChange (e) {
    setRandomText(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={pageLogo} className="App-logo" alt="logo" />
        <button onClick={changeLogo} className="logoChanger">
          Click to change logo
          <br/>
          Current logo : <code><b>{pageLogo}</b></code>
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input placeholder='Set random text' value={randomText} onChange={handleChange} maxLength={10}/>
        <code>{randomText}</code>

      </header>
    </div>
  );
}

export default App;
