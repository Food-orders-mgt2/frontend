import React, { useContext } from 'react'
import { UserContext } from "../context/userContext"
import Footer from '../components/footer'

export default function Home() {
  const { toggleModals } = useContext(UserContext)
  return (
    <>
      <section>
        <div className='ms-4   mt-5'><h1 className='fw-bold'>Bienvenue sur Para Dish !</h1></div>
        <div className='ms-4 mt-5'>
          <p>Découvrez une expérience culinaire unique en explorant
            <br /> notre délicieux menu. Connectez-vous pour passer votre
            <br /> commande et savourez des plats exceptionnels à portée de clic.
          </p>
        </div>
        <div className='mt-5 mb-5'>
          <button
            onClick={() => toggleModals("signIn")}
            className="btn btn-primary ms-4 rounded-pill ">
            Sign In
          </button>
          <button
            onClick={() => toggleModals("signUp")}
            className="btn btn-outline-primary ms-4 rounded-pill ">
            Sign Up
          </button>
        </div> 
        <div className='footers'>
        <Footer/>
        </div> 
      </section>
    </>
  )
}
