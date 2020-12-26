"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trimestre = void 0;
const Matiere_js_1 = require("./Matiere.js");
class Trimestre {
    constructor(trimestre) {
        this.matieres = [];
        trimestre.matieres.forEach(matiere => this.matieres.push(new Matiere_js_1.Matiere(matiere)));
        this.idPeriode = trimestre.idPeriode;
        this.libelleClasse = trimestre.libelleClasse;
        this.periodeLibelle = trimestre.periodeLibelle;
        this.periodeEnCours = trimestre.periodeEnCours;
        this.bareme = parseInt(trimestre.bareme);
    }
}
exports.Trimestre = Trimestre;
