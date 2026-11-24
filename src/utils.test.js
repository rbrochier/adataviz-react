import { filtrerParNom } from "./utils.js";
import { filtrerParThematique } from "./utils.js";

const projets = [
  { id: 1, titre: "Jardin partagé", theme: "Environnement" },
  { id: 2, titre: "Piste cyclable", theme: "Mobilités" },
];

describe("filtrerParNom", () => {
  it("renvoie un tableau vide si rien ne correspond", () => {
    expect(filtrerParNom(projets, "piscine")).toEqual([]);
  });
});


describe("filtrerParThematique", () =>{
    it("renvoie un tableau vide si rien ne correspond", () => {
        expect(filtrerParThematique(projets, "fontaine")).toEqual([]);
    })
})