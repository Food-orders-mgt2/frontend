import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../Style/Footers.css'; 

export default function Footer() {
    return (
        <footer className="bg-dark text-white text-center text-lg-start mt-10" id='footers' >
            <div className="container p-2"  id='footer'>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-0 mb-md-0 ">
                        <h5 className="text-uppercase mb-4">À propos de nous</h5>
                        <p>
                            Notre mission est de vous apporter la meilleure expérience culinaire, avec des plats délicieux et une livraison rapide.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 pb-1">Recherchez quelque chose</h5>
                        <input type="text" className="form-control" placeholder="Rechercher" />
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Suivez-nous</h5>
                        <div className="social-icons">
                            <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Mon App de Commande de Nourriture
            </div>
        </footer>
    );
}
