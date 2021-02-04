"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EleveAppel_1 = require("./EleveAppel");
class Appel {
    constructor(appel) {
        this.listeElevesAppel = [];
        this.isEnCours = appel.isEnCours;
        this.dateDebut = new Date(appel.dateDebut);
        this.dateFin = new Date(appel.dateFin);
        this.idAppel = appel.idAppel;
        this.libelleGroupe = appel.libelleGroupe;
        appel.listeElevesAppel.forEach(eleveAppel => this.listeElevesAppel.push(new EleveAppel_1.default(eleveAppel)));
    }
}
exports.default = Appel;
