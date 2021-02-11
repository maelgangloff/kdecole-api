"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Eleve_1 = __importDefault(require("./Eleve"));
const Etablissement_1 = __importDefault(require("./Etablissement"));
class Utilisateur {
    constructor(utilisateur) {
        this.eleves = [];
        this.etabs = [];
        this.errmsg = utilisateur.errmsg;
        this.type = utilisateur.type;
        this.nom = utilisateur.nom;
        utilisateur.eleves?.forEach(eleve => this.eleves.push(new Eleve_1.default(eleve)));
        utilisateur.etabs?.forEach(etab => this.etabs.push(new Etablissement_1.default(etab)));
        this.xiti = utilisateur.xiti;
        this.idEtablissementSelectionne = utilisateur.idEtablissementSelectionne;
        this.idEleveSelectionne = utilisateur.idEleveSelectionne;
        this.protection = utilisateur.protection;
        this.timezone = utilisateur.timezone;
    }
}
exports.default = Utilisateur;
