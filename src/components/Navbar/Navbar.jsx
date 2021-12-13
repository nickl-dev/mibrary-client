import React, { useState, useEffect } from 'react'

const navBar = typeof token === Object ? <div>Token is a string</div> : <div>Token is not a string</div>

function Navbar () {

  let [token, setToken] = useState({ token: 12345});
  useEffect(() => { console.log(typeof token)});

  return ( navBar )
}

export default Navbar;
