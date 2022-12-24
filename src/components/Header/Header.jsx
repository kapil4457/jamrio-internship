import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className='main-header-div'>
        <div className="options">
            <NavLink to="/">Home</NavLink> 
            <NavLink to="/about">About</NavLink>
        </div>
    </div>
  )
}

export default Header