"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Note_1 = __importDefault(require("./Note"));
class Matiere {
    constructor(matiere) {
        this.devoirs = [];
        this.bareme = parseInt(matiere.bareme);
        this.moyenneEleve = Note_1.default.stringNoteToNumber(matiere.moyenneEleve);
        matiere.devoirs.forEach((devoir) => this.devoirs.push(new Note_1.default(devoir)));
        this.enseignants = matiere.enseignants;
        this.matiereLibelle = matiere.matiereLibelle;
        this.moyenneClasse = Note_1.default.stringNoteToNumber(matiere.moyenneClasse);
    }
}
exports.default = Matiere;
