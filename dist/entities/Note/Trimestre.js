"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matiere_1 = __importDefault(require("./Matiere"));
class Trimestre {
    constructor(trimestre) {
        this.matieres = [];
        trimestre.matieres.forEach(matiere => this.matieres.push(new Matiere_1.default(matiere)));
        this.idPeriode = trimestre.idPeriode;
        this.libelleClasse = trimestre.libelleClasse;
        this.periodeLibelle = trimestre.periodeLibelle;
        this.periodeEnCours = trimestre.periodeEnCours;
        this.bareme = parseInt(trimestre.bareme);
    }
    /**
     * Retourne la moyenne générale de l'élève
     * @return {number}
     */
    getMoyenneGenerale() {
        const moyennes = this.getTableauMoyennes();
        if (moyennes.length === 0)
            return false;
        let moyenneGenerale = 0;
        for (const moyenne of moyennes) {
            moyenneGenerale += moyenne / moyennes.length;
        }
        return moyenneGenerale;
    }
    /**
     * Retourne la médiane des moyennes des matières de l'élève
     * @return {number}
     */
    getMedianeGenerale() {
        let moyennes = this.getTableauMoyennes();
        if (moyennes.length === 0)
            return false;
        moyennes = moyennes.slice(0).sort(function (x, y) {
            return x - y;
        });
        const b = (moyennes.length + 1) / 2;
        return (moyennes.length % 2) ? moyennes[b - 1] : (moyennes[b - 1.5] + moyennes[b - 0.5]) / 2;
    }
    /**
     * Retourne un tableau contenant les moyennes des matières de l'élève
     * @return {number[]}
     */
    getTableauMoyennes() {
        const moyennes = [];
        for (const matiere of this.matieres) {
            if (typeof matiere.moyenneEleve === 'number') {
                moyennes.push(matiere.moyenneEleve);
            }
        }
        return moyennes;
    }
}
exports.default = Trimestre;
