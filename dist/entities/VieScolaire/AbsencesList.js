"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Absence_1 = require("./Absence");
class AbsencesList {
    constructor(absenceList) {
        this.listeAbsences = [];
        this.errmsg = absenceList.errmsg;
        this.codeEleve = absenceList.codeEleve;
        this.nbAbsencesMax = absenceList.nbAbsencesMax;
        absenceList.listeAbsences.forEach(absence => this.listeAbsences.push(new Absence_1.default(absence)));
    }
}
exports.default = AbsencesList;
