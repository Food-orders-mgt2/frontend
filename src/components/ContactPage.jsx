import React from "react";
import '../Style/ContactPage.css'

export default function contact() {
    return <>
        <div className="contact-page">
            <h1>Contactez-nous</h1>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nom :</label>
                    <input type="text" id="name" name="name" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Adresse e-mail :</label>
                    <input type="email" id="email" name="email" placeholder="Votre adresse e-mail" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea id="message" name="message" placeholder="Votre message" rows="4" required></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </>
}