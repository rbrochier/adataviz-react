import { useState } from "react";

export function Carte({
  titre,
  arrondissement,
  avancement,
  annee,
  budget,
  lien,
  direction,
}) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <article className="projet">
      <h3 className="nom-projet">{titre}</h3>
      <div className="carte">
        <button
          className="bouton-detail"
          type="button"
          onClick={() => setOuvert(!ouvert)}
        >
          {ouvert ? "Masquer les détails" : "Voir les détails"}
        </button>

        {ouvert && (
          <>
            <p className="direction">{direction}</p>
            <p className="arrondissement">{arrondissement}</p>
            <p className="avancement-projet">{avancement}</p>
            <p className="dates">{annee}</p>
            <p className="budget">{budget.toLocaleString("fr-FR")} €</p>
            <a href={lien} target="_blank"  className="url-projet" id="lien">Lien vers le Projet</a>
            </>
        )}
      </div>
    </article>
  );
}
