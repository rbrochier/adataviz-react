import { filtrerParNom } from "./utils.js";
import { filtrerParThematique } from "./utils.js";

const projets = [
  { id: 1, titre: "Jardin partagé", theme: "Environnement" },
  { id: 2, titre: "Piste cyclable", theme: "Mobilités" },
  { id: 3, titre: "Éclairage du viaduc", theme: "Cadre de vie" },
 
];

describe("filtrerParNom", () => {
  it("renvoie un tableau vide si rien ne correspond", () => {
    expect(filtrerParNom(projets, "piscine")).toEqual([]);
  });

  it("ignore les espaces autour du mot recherché", () => {
    expect(filtrerParNom(projets, "  viaduc  ").length).toBe(1);
  });
});


describe("filtrerParThematique", () =>{
    it("renvoie un tableau vide si rien ne correspond", () => {
        expect(filtrerParThematique(projets, "fontaine")).toEqual([]);
    })
})

