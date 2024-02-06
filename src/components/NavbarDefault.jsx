import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import logo from './logo.png'
import '../Style/NavBar.css';
import { UserContext } from "../context/userContext" 

export default function Navbar() {
  const { toggleModals } = useContext(UserContext)
  return (
    <nav className="navbar navbar-light px-4" id='nav'>
      <Link to="/" className="navbar-brand">
      <img className='logonav' src={logo}  alt="Logo" />
    </Link>
    </nav>
  )
}