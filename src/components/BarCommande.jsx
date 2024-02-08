import React, { useState } from "react";
import '../../src/Style/CommandeNourriture.css';
import moment from 'moment';


export default function CommandeNourriture() {
  const [nomClient, setNomClient] = useState('');
  const [FraisDeLivraison, setFraisDeLivraison] = useState('');
  const [dateCommande, setDateCommande] = useState(moment().format('YYYY-MM-DD'));
  const [dateLivraison, setDateLivraison] = useState('');
  const [typePaiement, setTypePaiement] = useState('cash');

  const handleCommander = (e) => {
    e.preventDefault();
    console.log('Commande envoyée avec succès !');
    setNomClient('');
    setFraisDeLivraison('');
    setDateLivraison('');
    setTypePaiement('cash');
  };

    return <>
    <form onSubmit={handleCommander}>
      <div className="commande-bar">
        <div className="commande-details">
          <label>Nom du client:
            <input
              type="text"
              value={nomClient}
              onChange={(e) => setNomClient(e.target.value)}
            />
          </label>
          <label>Frais de livraison :
            <input
              type="text"
              value={FraisDeLivraison}
              onChange={(e) => setFraisDeLivraison(e.target.value)}
            />
          </label>
          <label>Date de commande:
            <input
              type="date"
              value={dateCommande}
              onChange={(e) => setDateCommande(e.target.value)}
            />
          </label>
          <label>Date de livraison:
            <input
              type="date"
              value={dateLivraison}
              onChange={(e) => setDateLivraison(e.target.value)}
            />
          </label>
          <label>Type de paiement:
            <select
              value={typePaiement}
              onChange={(e) => setTypePaiement(e.target.value)}
            >
              <option value="cash">Cash</option>
              <option value="bank">Banque</option>
            </select>
          </label>
        </div>
        <button type="submit">Envoyer</button>
      </div>
    </form>
</>
}
