function Carte({ titre, arrondissement, avancement, annee, budget, lien }) {
  return (
    <article>
      <h3 className="nom-projet">{titre}</h3>
      <p className="arrondissement">{arrondissement}</p>
      <p className="avancement-projet">{avancement}</p>
      <p className="dates">{annee}</p>
      <p className="budget">{budget.toLocaleString("fr-FR")} €</p>
      <a href={lien} className="url-projet">Lien vers le Projet</a>
    </article>
  );
}

export default Carte;