"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbsenceEleveAppel_1 = __importDefault(require("./AbsenceEleveAppel"));
class EleveAppel {
    constructor(eleveAppel) {
        this.nomEleve = eleveAppel.nomEleve;
        this.prenomEleve = eleveAppel.prenomEleve;
        this.idEleve = eleveAppel.idEleve;
        if (eleveAppel.absenceEleveAppel)
            this.absenceEleveAppel = new AbsenceEleveAppel_1.default(eleveAppel.absenceEleveAppel);
    }
}
exports.default = EleveAppel;
