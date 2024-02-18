import React, { useState, useContext } from "react";
import moment from 'moment';
import saveOrder from "../service/SaveOrder";
import { UserContext } from "../context/userContext"; 
import '../Style/CommandeNourriture.css'

export default function CommandeNourriture() {
  const [Lieu, setLieu] = useState('');
  const [FraisDeLivraison, setFraisDeLivraison] = useState('4000');
  const [dateCommande, setDateCommande] = useState(moment().format('YYYY-MM-DD'));
  const [dateLivraison, setDateLivraison] = useState('');
  const [typePaiement, setTypePaiement] = useState('cash');

  const { currentUser } = useContext(UserContext);
  const userName = currentUser ? currentUser.displayName : 'Utilisateur anonyme';

  const orderData = {
    date_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    shipping_cost: FraisDeLivraison,
    delivery_date_time: dateLivraison,
    delivery_place: Lieu,
    id_User: userName,
    pay_mode: typePaiement
  };

  const handleCommander = async (e) => {
    e.preventDefault();
    try {
      console.log('Commande envoyée avec succès !');
      await saveOrder(orderData);
      setLieu('');
      setFraisDeLivraison('');
      setDateLivraison('');
      setTypePaiement('cash');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la commande :', error.message);
    }
  };


  return (
    <form onSubmit={handleCommander}>
      <div className="commande-bar gap-4">
        <label>Lieu :
          <input
            type="text"
            value={Lieu}
            onChange={(e) => setLieu(e.target.value)}
          />
        </label>
        <label>Frais de livraison :
          <input
            type="text"
            value={FraisDeLivraison + ' Ar'}
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
            <option value="bank">Bank</option>
            <option value="Mobile money">Mobile money</option>
          </select>
        </label>
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
}
