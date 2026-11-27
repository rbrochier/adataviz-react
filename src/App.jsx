import { Entete } from "./components/Entete.jsx";
import { Carte } from "./components/Carte.jsx";
import { useState, useEffect } from "react";
import {
  filtrerParNom,
  extraireThematiques,
  filtrerParThematique,
  formaterDonnees,
} from "./utils.js";
/* import { Entete } from "./components/Entete.jsx"; */

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
  const resultats = filtrerParNom(parTheme, recherche);
  const thematiques = extraireThematiques(donnees);
  const [chargementEnCours, setChargementEnCours] = useState(true);
  const [erreurChargement, setErreurChargement] = useState(false);
  const projet = resultats[index];

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
  };

  const precedent = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const retourMenu = () => {
    setThemeChoisi(null);
    setRecherche("");
    setSaisie("");
    setIndex(0);
  };
  console.log(
    "thème :",
    themeChoisi,
    "| parTheme :",
    parTheme.length,
    "| resultats :",
    resultats.length,
  );
  return (
    <>
      <Entete />

      <main>
         <p id="compteur-projets">
                  Projet {index + 1}/{resultats.length}
                </p>
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
        {chargementEnCours && <p>Chargement des projets…</p>}
        {erreurChargement && <p>Impossible de charger les projets.</p>}
      
        {themeChoisi === null && (
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
        )}
        {afficherCartes && (
          <section className="carte-projet">
  <button type="button" className="lien-retour" onClick={retourMenu}>
    ← Thématiques
  </button>

  {themeChoisi !== null && <h2>{themeChoisi}</h2>}

  {resultats.length === 0 && (
    <p>Aucun projet ne correspond à « {recherche} ».</p>
  )}

  {projet && (
    <>

      <Carte
        key={projet.id}
        titre={projet.titre}
        arrondissement={projet.arrondissement}
        avancement={projet.avancement}
        annee={projet.annee}
        budget={projet.budget}
        lien={projet.lien}
        direction={projet.direction}
      />

      <div id="bouton-navigation">
        <button type="button" onClick={precedent} disabled={index === 0}>
          ← Précédent
        </button>
        <button
          type="button"
          onClick={suivant}
          disabled={index >= themeChoisi.length - 1}
        >
          Suivant →
        </button>
      </div>
    </>
  )}
</section>
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
