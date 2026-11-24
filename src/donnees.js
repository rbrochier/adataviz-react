import { formaterDonnees } from "./utils.js";


const brutes = [
{
"identifiant_projet_gagnant":1659,
"lien_projet_soumis":null,
"lien_projet_gagnant":"https://decider.paris.fr/bp/jsp/site/Portal.jsp?document_id=1659&portlet_id=158",
"edition":"2015",
"titre_projet_gagnant":"Street art et expression libre dans le 19e",
"thematique":"Education et jeunesse",
"direction_pilote_projet":"Direction des Affaires Culturelles",
"budget_global_projet_gagnant":200000,
"echelle_bp":"Budget participatif d’arrondissement",
"adresse_projet_gagnant":"7 Place Armand Carrel",
"arrondissement_projet_gagnant":"75019",
"projet_q_pop":"Non",
"avancement_projet":"FIN",
"debut_etudes_projet":"2016-03",
"lancement_procedure_projet":"2019-03",
"lancement_travaux_projet":"2019-07",
"livraison_prev_projet":"2019-10",
"ouverture_projet":"2020-10",
"derniere_mise_a_jour_donnees":null
},
{
"identifiant_projet_gagnant":1484,
"lien_projet_soumis":null,
"lien_projet_gagnant":"https://decider.paris.fr/bp/jsp/site/Portal.jsp?document_id=1484&portlet_id=158",
"edition":"2015",
"titre_projet_gagnant":"Piétonnisation de la rue Saint-Jean",
"thematique":"Prévention et sécurité",
"direction_pilote_projet":"Direction de la Voirie et des Déplacements",
"budget_global_projet_gagnant":320000,
"echelle_bp":"Budget participatif d’arrondissement",
"adresse_projet_gagnant":"Rue Saint-Jean",
"arrondissement_projet_gagnant":"75017",
"projet_q_pop":"Non",
"avancement_projet":"FIN",
"debut_etudes_projet":"2016-02",
"lancement_procedure_projet":"2016-04",
"lancement_travaux_projet":"2017-02",
"livraison_prev_projet":"2017-04",
"ouverture_projet":"2017-05",
"derniere_mise_a_jour_donnees":null
},
{
"identifiant_projet_gagnant":1513,
"lien_projet_soumis":null,
"lien_projet_gagnant":"https://decider.paris.fr/bp/jsp/site/Portal.jsp?document_id=1513&portlet_id=158",
"edition":"2015",
"titre_projet_gagnant":"Des ordinateurs pour les usagers de la Maison des associations",
"thematique":"Cadre de vie",
"direction_pilote_projet":"Direction de la Démocratie, des Citoyens et des Territoires",
"budget_global_projet_gagnant":7000,
"echelle_bp":"Budget participatif d’arrondissement",
"adresse_projet_gagnant":"23 Rue Greneta",
"arrondissement_projet_gagnant":"75002",
"projet_q_pop":"Non",
"avancement_projet":"FIN",
"debut_etudes_projet":"2016-04",
"lancement_procedure_projet":"2016-06",
"lancement_travaux_projet":"2016-10",
"livraison_prev_projet":"2016-12",
"ouverture_projet":"2016-12",
"derniere_mise_a_jour_donnees":null
},

];


export const donnees = brutes.map(formaterDonnees);
console.log(donnees.filter((projet) => !projet.id)); 