"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.default = Travail;
