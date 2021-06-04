"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercice_1 = __importDefault(require("./Exercice"));
class Seance {
    hdeb;
    enSeance = [];
    matiere;
    aFaire = [];
    heureFin;
    flagModif;
    flagActif;
    heureDebut;
    hfin;
    aRendre = [];
    motifModif;
    idSeance;
    salle;
    titre;
    constructor(seance) {
        this.hdeb = new Date(seance.hdeb);
        seance.enSeance?.forEach(enSeance => this.enSeance?.push(new Exercice_1.default(enSeance)));
        this.matiere = seance.matiere;
        seance.aFaire?.forEach(aFaire => this.aFaire?.push(new Exercice_1.default(aFaire)));
        this.heureFin = seance.heureFin;
        this.flagModif = seance.flagModif;
        this.titre = seance.titre;
        this.flagActif = seance.flagActif;
        this.heureDebut = seance.heureDebut;
        this.hfin = new Date(seance.hfin);
        seance.aRendre?.forEach(aRendre => this.aRendre?.push(new Exercice_1.default(aRendre)));
        this.motifModif = seance.motifModif;
        this.idSeance = seance.idSeance;
        this.salle = seance.salle;
    }
}
exports.default = Seance;
