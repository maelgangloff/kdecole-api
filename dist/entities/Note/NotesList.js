"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Note_1 = require("./Note");
class NotesList {
    constructor(notesList) {
        this.listeNotes = [];
        this.errmsg = notesList.errmsg;
        this.codeEleve = notesList.codeEleve;
        this.moduleNotesActif = notesList.moduleNotesActif;
        this.nbNotesMax = notesList.nbNotesMax;
        notesList.listeNotes.forEach(note => this.listeNotes.push(new Note_1.default(note)));
    }
}
exports.default = NotesList;
