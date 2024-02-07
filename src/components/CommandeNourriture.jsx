import React, { useState } from "react";
import '../../src/Style/CommandeNourriture.css';

export default function CommandeNourriture() {
    const [nomClient, setNomClient] = useState("");
    const [prenomClient, setPrenomClient] = useState("");
    const [nomNourriture, setNomNourriture] = useState("");
    const [pieces, setPieces] = useState("");
    const [dateLivraison, setDateLivraison] = useState("");
    const [modePaiement, setModePaiement] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Nom client:", nomClient);
        console.log("Prénom client:", prenomClient);
        console.log("Nom Nourriture:", nomNourriture);
        console.log("Pièces:", pieces);
        console.log("Date de livraison:", dateLivraison);
        console.log("Mode de paiement:", modePaiement);
    };

    return (
        <div className="Commande">
            <form onSubmit={handleSubmit}>
                <h1>Votre commande </h1>
                <div>
                    <label htmlFor="nomClient">Nom  :</label>
                    <input
                        type="text"
                        id="nomClient"
                        value={nomClient}
                        onChange={(e) => setNomClient(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="prenomClient">Prénom  :</label>
                    <input
                        type="text"
                        id="prenomClient"
                        value={prenomClient}
                        onChange={(e) => setPrenomClient(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="nomNourriture">Nom Nourriture :</label>
                    <input
                        type="text"
                        id="nomNourriture"
                        value={nomNourriture}
                        onChange={(e) => setNomNourriture(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="pieces">quantité :</label>
                    <input
                        type="text"
                        id="pieces"
                        value={pieces}
                        onChange={(e) => setPieces(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="dateLivraison">Date de livraison :</label>
                    <input
                        type="date"
                        id="dateLivraison"
                        value={dateLivraison}
                        onChange={(e) => setDateLivraison(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="modePaiement">Mode de paiement :</label>
                    <select
                        id="modePaiement"
                        value={modePaiement}
                        onChange={(e) => setModePaiement(e.target.value)}
                        required
                    >
                        <option value=""></option>
                        <option value="carte">Carte de crédit</option>
                        <option value="espece">Espèces</option>
                    </select>
                </div>

                <button type="submit">Valider la commande</button>
            </form>
        </div>
    );
}
