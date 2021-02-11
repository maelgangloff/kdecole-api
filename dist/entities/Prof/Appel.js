"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EleveAppel_1 = __importDefault(require("./EleveAppel"));
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
