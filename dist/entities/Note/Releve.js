"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Releve = void 0;
const Trimestre_js_1 = require("./Trimestre.js");
class Releve {
    constructor(releve) {
        this.trimestres = [];
        releve.forEach(trimestre => this.trimestres.push(new Trimestre_js_1.Trimestre(trimestre)));
    }
    getMoyenneGenerale() {
        let moyenneGenerale = 0;
        this.trimestres.forEach(trimestre => {
            if (trimestre.periodeEnCours) {
                trimestre.matieres.forEach(matiere => {
                    moyenneGenerale += ((matiere.moyenneEleve !== null ? matiere.moyenneEleve : 0) / trimestre.matieres.length);
                });
            }
        });
        return parseFloat(moyenneGenerale.toFixed(1));
    }
}
exports.Releve = Releve;
