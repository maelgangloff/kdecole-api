"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbsenceEleveAppel {
    idAbsence;
    type;
    dateDebut;
    dateFin;
    idMotif;
    modifiable;
    idEleve;
    constructor(absenceEleveAppel) {
        this.idAbsence = absenceEleveAppel.idAbsence;
        this.type = absenceEleveAppel.type;
        this.dateDebut = new Date(absenceEleveAppel.dateDebut);
        this.dateFin = new Date(absenceEleveAppel.dateFin);
        this.idMotif = absenceEleveAppel.idMotif;
        this.modifiable = absenceEleveAppel.modifiable;
        this.idEleve = absenceEleveAppel.idEleve;
    }
}
exports.default = AbsenceEleveAppel;
