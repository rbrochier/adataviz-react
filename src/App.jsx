import { Entete } from "./components/Entete.jsx";
import { Carte } from "./components/Carte.jsx";
import { donnees } from "./donnees.js";
import { useState } from "react";
import { filtrerParNom } from "./utils.js";

function App() {
  const [saisie, setSaisie] = useState("");
  const [recherche, setRecherche] = useState("");
  
  const resultats = filtrerParNom(donnees, recherche);

  const lancerRecherche = (event) => {
    event.preventDefault();
    setRecherche(saisie);
  };

  return (
    <>
      <Entete />
      <main>
        <section className="recherche">
          <form
            id="form-recherche"
            onSubmit={lancerRecherche}>
            <label htmlFor="site-search">Rechercher un projet :</label>
            <input
              type="search"
              id="site-search"
              value={saisie}
              onChange={(event) => setSaisie(event.target.value)}
            />
            <button type="submit">Rechercher</button>
          </form>
        </section>
        <section className="menu-themes">
          <h2>Thématiques</h2>
          <ul id="liste-themes">
            <li>
              <button type="button">Cadre de vie</button>
            </li>
            <li>
              <button type="button">Mobilités</button>
            </li>
          </ul>
        </section>

        <div className="cartes">
          {resultats.length === 0 && (
            <p>Aucun projet ne correspond à {recherche}</p>
          )}
          {resultats.map((projet) => (
            <Carte
              key={projet.id}
              titre={projet.titre}
              arrondissement={projet.arrondissement}
              avancement={projet.avancement}
              annee={projet.annee}
              budget={projet.budget}
              lien={projet.lien}
              direction={projet.direction}
            ></Carte>
          ))}
        </div>
      </main>

      <footer>
        <p>
          Données : <a href="https://opendata.paris.fr/">Open Data Paris</a> ·
          Richard Brochier, Ada Tech School, 2026
        </p>
      </footer>
    </>
  );
}

export default App;
