import  {Entete } from "./components/Entete.jsx";
import { Carte } from "./components/Carte.jsx";
import { donnees } from "./donnees.js";

function App() {
  return (
    <>
      <Entete />
      <main>
        <section className="recherche">
          <form id="form-recherche">
            <label htmlFor="site-search">Rechercher un projet :</label>
            <input type="search" id="site-search" />
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
          {donnees.map((projet) => (
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

          ))}
          </div>
      </main>

      <footer>Données : Open Data Paris</footer>
    </>
  );
}

export default App;
