"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilisateur = void 0;
const Eleve_js_1 = require("./Eleve.js");
const Etablissement_js_1 = require("./Etablissement.js");
class Utilisateur {
    constructor(utilisateur) {
        this.eleves = [];
        this.etabs = [];
        this.errmsg = utilisateur.errmsg;
        this.type = utilisateur.type;
        this.nom = utilisateur.nom;
        utilisateur.eleves?.forEach(eleve => this.eleves.push(new Eleve_js_1.Eleve(eleve)));
        utilisateur.etabs?.forEach(etab => this.etabs.push(new Etablissement_js_1.Etablissement(etab)));
        this.xiti = utilisateur.xiti;
        this.idEtablissementSelectionne = utilisateur.idEtablissementSelectionne;
        this.idEleveSelectionne = utilisateur.idEleveSelectionne;
        this.protection = utilisateur.protection;
        this.timezone = utilisateur.timezone;
    }
}
exports.Utilisateur = Utilisateur;
