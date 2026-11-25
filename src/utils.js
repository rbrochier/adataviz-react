export const formaterDonnees = (element) => ({
  theme: element.thematique,
  titre: element.titre_projet_gagnant,
  arrondissement: element.arrondissement_projet_gagnant,
  avancement: element.avancement_projet,
  annee: element.edition,
  budget: element.budget_global_projet_gagnant,
  lien: element.lien_projet_gagnant,
  id: element.identifiant_projet_gagnant,
  direction: element.direction_pilote_projet

  
});



export const extraireThematiques = (projets) => {
  const thematiques = [];
  for (const projet of projets) {
    const theme = projet.theme;
    if (!thematiques.includes(theme)) {
      thematiques.push(theme);
    }
  }
  return thematiques;
};

/// function filtrerParCategorie(donnees, valeur)

export const filtrerParThematique = (projets, valeur) => {
  const filtreThemes = projets.filter((projet) => projet.theme === valeur);
  return filtreThemes;
};

/// function filtrerParNom(donnees, recherche)

export const filtrerParNom = (projets, recherche) => {
  const mot = recherche.trim().toLowerCase();
  return projets.filter((projet) => projet.titre.toLowerCase().includes(mot));
};

/// function trierParNom(donnees)

export const trierParNom = (donnees) => {};
