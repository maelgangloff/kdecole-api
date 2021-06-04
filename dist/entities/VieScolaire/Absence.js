"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Absence {
    dateFin;
    motif;
    type;
    matiere;
    dateDebut;
    justifiee;
    constructor(absence) {
        this.dateFin = new Date(absence.dateFin);
        this.motif = absence.motif;
        this.type = absence.type;
        this.matiere = absence.matiere === '' ? null : absence.matiere;
        this.justifiee = absence.justifiee;
        this.dateDebut = new Date(absence.dateDebut);
    }
}
exports.default = Absence;
