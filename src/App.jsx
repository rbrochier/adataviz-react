import { Entete } from "./components/Entete.jsx";
import { Carte } from "./components/Carte.jsx";
import { donnees } from "./donnees.js";
import { useState, useEffect } from "react";
import {
  filtrerParNom,
  extraireThematiques,
  filtrerParThematique,
  formaterDonnees,
} from "./utils.js";

function App() {
  const url =
    "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/bp_projets_gagnants/records?limit=100";
  const [donnees, setDonnees] = useState([]);
  const [saisie, setSaisie] = useState("");
  const [recherche, setRecherche] = useState("");
  const [themeChoisi, setThemeChoisi] = useState(null);
  const [index, setIndex] = useState(0);
  const parTheme =
    themeChoisi === null ? donnees : filtrerParThematique(donnees, themeChoisi);
  const resultats = filtrerParNom(donnees, recherche);
  const thematiques = extraireThematiques(donnees);

  useEffect(() => {
    const charger = async () => {
      try {
        const reponse = await fetch(url);
        if (!reponse.ok) {
          throw new Error("Erreur HTTP" + reponse.status);
        }
        const json = await reponse.json();
        setDonnees(json.results.map(formaterDonnees));
      } catch (error) {
        setErreurChargement(true);
        console.log(error);
        console.log("Il y a une erreur");
      } finally {
        setChargementEnCours(false);
      }
    };
    charger();
  }, []);

  const lancerRecherche = (event) => {
    event.preventDefault();
    setRecherche(saisie);
    setIndex(0);
  };

  const afficherCartes = themeChoisi !== null || recherche !== "";
  const suivant = () => {
    if (index < resultats.length - 1) {
      setIndex(index + 1);
    }
    const precedent = () => {
      if (index > 0) {
        setIndex(index - 1);
      }
    };
    const retourMenu = () => {
      setThemeChoisi(null);
      setIndex(0);
    };
  };

  return (
    <>
      <Entete />

      <main>
        <section className="recherche">
          <form id="form-recherche" onSubmit={lancerRecherche}>
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
            {thematiques.map((theme) => (
              <li key={theme}>
                <button
                  type="button"
                  onClick={() => {
                    setThemeChoisi(theme);
                    setIndex(0);
                  }}
                >
                  {theme}
                </button>
              </li>
            ))}
          </ul>
        </section>

        {afficherCartes && (
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
        )}
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
