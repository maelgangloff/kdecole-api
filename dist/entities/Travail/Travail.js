"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Travail = void 0;
const Endpoint_1 = require("../Endpoint");
const Kdecole_1 = require("../../Kdecole");
const ContenuActivite_1 = require("./ContenuActivite");
class Travail {
    constructor(travailAFaire) {
        this.type = travailAFaire.type;
        this.temps = travailAFaire.temps;
        this.matiere = travailAFaire.matiere;
        this.flagRealise = travailAFaire.flagRealise;
        this.titre = travailAFaire.titre;
        this.date = new Date(travailAFaire.date);
        this.uid = parseInt(travailAFaire.uid);
        this.uidSeance = parseInt(travailAFaire.uidSeance);
    }
    getContenuActivite() {
        return Endpoint_1.Endpoint.kdecole({
            service: 'contenuActivite',
            parameters: `idetablissement/${Kdecole_1.Kdecole.idEtablissement}/${this.uidSeance}/${this.uid}/`
        }).then(contenuActivite => {
            return new ContenuActivite_1.ContenuActivite(contenuActivite);
        });
    }
}
exports.Travail = Travail;
