"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matiere = void 0;
const Note_js_1 = require("./Note.js");
class Matiere {
    constructor(matiere) {
        this.devoirs = [];
        this.bareme = parseInt(matiere.bareme);
        this.moyenneEleve = Note_js_1.Note.stringNoteToNumber(matiere.moyenneEleve);
        matiere.devoirs.forEach((devoir) => this.devoirs.push(new Note_js_1.Note(devoir)));
        this.enseignants = matiere.enseignants;
        this.matiereLibelle = matiere.matiereLibelle;
        this.moyenneClasse = Note_js_1.Note.stringNoteToNumber(matiere.moyenneClasse);
    }
}
exports.Matiere = Matiere;
