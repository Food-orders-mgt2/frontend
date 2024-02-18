import React, { useState, useContext } from "react";
import saveOrder from "../service/SaveOrder";
import { UserContext } from "../context/userContext"; 
import '../Style/CommandeNourriture.css'
import { useCart } from '../context/CartContext';
import moment from 'moment';

export default function CommandeNourriture() {
  const { calculateTotal } = useCart();
  const { currentUser } = useContext(UserContext);
  const [lieu, setLieu] = useState('');
  const [fraisDeLivraison, setFraisDeLivraison] = useState(4000);
  const [dateLivraison, setDateLivraison] = useState('');
  const [typePaiement, setTypePaiement] = useState('Cash');

  const handleCommander = async (e) => {
    e.preventDefault();

    const orderData = {
      list_dish_id: "1,2,6",
      total_price: +calculateTotal().toFixed(2),
      date_time: moment().toISOString(),
      shipping_cost: +fraisDeLivraison.toFixed(2),
      delivery_date_time: dateLivraison,
      delivery_address: lieu,
      id_User: '137db6e1-d154-466f-aab6-85897c909599',
      pay_mode: typePaiement
    };

    try {
      await saveOrder(orderData);
      setLieu('');
      setFraisDeLivraison(4000);
      setDateLivraison('');
      setTypePaiement('Bank');
      console.log('Commande envoyée avec succès !');
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
            value={lieu}
            onChange={(e) => setLieu(e.target.value)}
          />
        </label>
        <label>Frais de livraison :
          <input
            type="number"
            value={fraisDeLivraison}
            onChange={(e) => setFraisDeLivraison(+e.target.value)}
          />
        </label>
        <label>Date de livraison:
          <input
            type="datetime-local"
            value={dateLivraison}
            onChange={(e) => setDateLivraison(e.target.value)}
          />
        </label>
        <label>Type de paiement:
          <select
            value={typePaiement}
            onChange={(e) => setTypePaiement(e.target.value)}
          >
            <option value="Cash">Cash</option>
            <option value="Bank">Bank</option>
            <option value="Mobile money">Mobile money</option>
          </select>
        </label>
        <button type="submit">Envoyer</button>
      </div>
    </form>
  );
}
