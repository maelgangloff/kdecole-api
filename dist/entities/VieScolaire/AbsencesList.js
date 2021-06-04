"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Absence_1 = __importDefault(require("./Absence"));
class AbsencesList {
    codeEleve;
    nbAbsencesMax;
    listeAbsences = [];
    errmsg;
    constructor(absenceList) {
        this.errmsg = absenceList.errmsg;
        this.codeEleve = absenceList.codeEleve;
        this.nbAbsencesMax = absenceList.nbAbsencesMax;
        absenceList.listeAbsences.forEach(absence => this.listeAbsences.push(new Absence_1.default(absence)));
    }
}
exports.default = AbsencesList;
