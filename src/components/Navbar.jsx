import React, { useContext } from 'react'
import { UserContext } from "../context/userContext"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from "../firebase-config"
import logo from '../assets/logo.png'
import '../Style/NavBar.css';

export default function Navbar() {

  const { toggleModals } = useContext(UserContext)

  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch {
      alert("For some reasons we can't deconnect, please check your internet connexion and retry.")
    }
  }

  return (
    <nav className="navbar navbar-light px-4 " id='nav' style={{ zIndex: 1 }}>
      <Link to="/" className="navbar-brand">
        <img className='logonav' src={logo} alt="Logo" />
      </Link>
      <div>
        <button
          onClick={logOut}
          className="btn btn-danger ms-2">
          Se déconnecter
        </button>
      </div>
    </nav>
  )
}