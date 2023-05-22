import React from 'react'
import "../Styling/Header.css"
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  )
}

export default Header